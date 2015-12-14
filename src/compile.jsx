import _ from 'lodash';
import cheerio from 'cheerio';
import React from 'react';
import ReactML from './ReactML';

const CHEERIO = {
  TEXT: 'text',
  TAG: 'tag',
  ROOT: 'root',
};

function transform(node, elements) {
  if(Array.isArray(node)) {
    return _(node)
      .map((child) => transform(child, elements))
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
    if(!_.has(elements, name)) {
      return null;
    }
    return elements[name](attribs, transform(children, elements));
  }
  if(type === CHEERIO.ROOT) {
    return <ReactML>
      {transform(children, elements)}
    </ReactML>;
  }
  throw new TypeError(`Invalid node: ${node.toString()}`);
}

function compile(source, elements) {
  const rootNode = cheerio(source, {
    xmlMode: false,
    decodeEntities: true,
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    recognizeCDATA: false,
    recognizeSelfClosing: true,
  }).root().get(0);
  return transform(rootNode, elements);
}

export default compile;
