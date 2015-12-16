/* eslint-disable react/jsx-key */
import _ from 'lodash';
import cheerio from 'cheerio';
import React from 'react';
import ReactMLFragment from './ReactMLFragment';
import ReactMLParagraph from './ReactMLParagraph';

const CHEERIO = {
  TEXT: 'text',
  TAG: 'tag',
  ROOT: 'root',
};

const defaultComponents = {
  ReactMLFragment(attribs, children, boundTransformChildren) {
    return <ReactMLFragment>
      {boundTransformChildren(children)}
    </ReactMLFragment>;
  },

  ReactMLParagraph(attribs, children, boundTransformChildren) {
    return <ReactMLParagraph>
      {boundTransformChildren(children)}
    </ReactMLParagraph>;
  },
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

function transformNode(node, components) {
  const { type, name, data, attribs, children } = node;
  if(type === CHEERIO.ROOT) {
    return <ReactMLFragment>
      {transformChildren(transformNode, children, components)}
    </ReactMLFragment>;
  }
  if(type === CHEERIO.TAG) {
    const boundTransformChildren = (nextChildren) => transformChildren(transformNode, nextChildren, components);
    if(typeof components === 'function') {
      return components(name, attribs, children, boundTransformChildren, node);
    }
    if(!_.has(components, name)) {
      return null;
    }
    return components[name](attribs, children, boundTransformChildren, node);
  }
  if(type === CHEERIO.TEXT && typeof data === 'string') {
    return data;
  }
  return null;
}

function wrapParagraphs(source) {
  return source.split('\n').map((line) => {
    if(line.length > 0) {
      return `<ReactMLParagraph>${line.trim()}</ReactMLParagraph>`;
    }
    return '';
  }).join('');
}

function wrapFragment(source) {
  return wrapParagraphs(source, 'ReactMLParagraph');
}

function compile(source, components) {
  const fragmentSource = wrapFragment(source);
  const rootNode = cheerio.load(fragmentSource, {
    xmlMode: true,
    decodeEntities: true,
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    recognizeCDATA: false,
    recognizeSelfClosing: true,
  }).root().get(0);
  return transformNode(rootNode, Object.assign({}, components, defaultComponents));
}

export default compile;
