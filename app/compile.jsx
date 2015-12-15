/* eslint-disable react/jsx-key */
import _ from 'lodash';
import cheerio from 'cheerio';
import React from 'react';
import ReactMLFragment from './ReactMLFragment';

const CHEERIO = {
  TEXT: 'text',
  TAG: 'tag',
  ROOT: 'root',
};

function transformChildren(transformFn, children, components) {
  return children
    .map((child) => transformFn(child, components))
    .map((child, key) => {
      if(React.isValidElement(child)) {
        return React.cloneElement(child, { key });
      }
      return child;
    })
  ;
}

function transform(node, components) {
  const { type, name, data, attribs, children } = node;
  if(type === CHEERIO.ROOT) {
    return React.createElement(ReactMLFragment, {
      children: transformChildren(transform, children, components),
    });
  }
  if(type === CHEERIO.TAG) {
    const boundTransformChildren = (nextChildren) => transformChildren(transform, nextChildren, components);
    if(typeof components === 'function') {
      return components(name, attribs, children, boundTransformChildren);
    }
    if(!_.has(components, name)) {
      return null;
    }
    return components[name](attribs, children, boundTransformChildren);
  }
  if(type === CHEERIO.TEXT && typeof data === 'string') {
    return data;
  }
  throw new TypeError(`Invalid node: ${node.toString()}`);
}

function wrapLines(source, tag) {
  return source.split('\n').map((line) => {
    if(line.length > 0) {
      return `<${tag}>${line}</${tag}>`;
    }
    return '';
  }).join('');
}

function prepare(source) {
  return wrapLines(source, 'p');
}

function compile(source, components) {
  const preparedSource = prepare(source);
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
