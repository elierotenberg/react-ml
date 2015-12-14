/* eslint-disable react/jsx-key */
import _ from 'lodash';
import cheerio from 'cheerio';
import React from 'react';

const CHEERIO = {
  TEXT: 'text',
  TAG: 'tag',
  ROOT: 'root',
};

function transform(node, components) {
  if(Array.isArray(node)) {
    return _(node)
      .map((child) => transform(child, components))
      .flatten()
      .map((child, key) => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, { key });
        }
        return child;
      })
    .value();
  }
  const { type, name, data, attribs, children } = node;
  if(type === CHEERIO.TEXT && typeof data === 'string') {
    return data;
  }
  if(type === CHEERIO.TAG) {
    const boundTransform = (nextChildren) => transform(nextChildren, components);
    if(typeof components === 'function') {
      return components(name, attribs, children, boundTransform);
    }
    if(!_.has(components, name)) {
      return null;
    }
    return components[name](attribs, children, boundTransform);
  }
  if(type === CHEERIO.ROOT) {
    return transform(children, components);
  }
  throw new TypeError(`Invalid node: ${node.toString()}`);
}

function prepare(source) {
  return source.split('\n').map((line) => {
    if(line.length > 0) {
      return `<p>${line}</p>`;
    }
    return '';
  }).join('');
}

function compile(source, components) {
  const preparedSource = prepare(source);
  console.warn({ preparedSource });
  const rootNode = cheerio.load(preparedSource, {
    xmlMode: false,
    decodeEntities: true,
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    recognizeCDATA: false,
    recognizeSelfClosing: true,
  }).root().get(0);
  return transform(rootNode, Object.assign({}, components, {
    'p': (attribs, children) => <p>{children}</p>,
  }));
}

export default compile;
