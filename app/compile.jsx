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
    if(!_.has(components, name)) {
      return null;
    }
    return components[name](attribs, transform(children, components));
  }
  if(type === CHEERIO.ROOT) {
    return transform(children, components);
  }
  throw new TypeError(`Invalid node: ${node.toString()}`);
}

function compile(source, components) {
  const rootNode = cheerio(source, {
    xmlMode: false,
    decodeEntities: true,
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    recognizeCDATA: false,
    recognizeSelfClosing: true,
  }).root().get(0);
  return transform(rootNode, components);
}

export default compile;
