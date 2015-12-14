/* eslint-disable react/jsx-key */
import _ from 'lodash';
import React from 'react';

function basicHtmlWrapper(tagName, className, style) {
  return (attrs, children, transformChildren) =>
    React.createElement(tagName, { className, style, children: transformChildren(children) })
  ;
}

export default {
  'b': basicHtmlWrapper('span', 'reactml-b', { fontWeight: 'bold' }),
  'i': basicHtmlWrapper('span', 'reactml-i', { fontStyle: 'italic' }),
  'u': basicHtmlWrapper('span', 'reactml-b', { textDecoration: 'underline' }),
  's': basicHtmlWrapper('span', 'reactml-s', { textDecoration: 'line-through' }),
  'link': ({ url }, children, transformChildren) => {
    if(typeof url === 'string') {
      return <a className='reactml-link' href={url}>
        {transformChildren(children)}
      </a>;
    }
    if(children.length === 0) {
      return null;
    }
    const [{ type, data }] = children;
    if(type === 'text') {
      return <a className='reactml-link' href={data}>
        {data}
      </a>;
    }
    return null;
  },
  'image': ({ url }, children) => {
    if(typeof url === 'string') {
      if(_.every(children, ({ type }) => type === 'text')) {
        return <img alt={children.map(({ data }) => data).join('')} className='reactml-image' src={url} />;
      }
      return <img alt={url} className='reactml-image' src={url} />;
    }
    if(children.length === 0) {
      return null;
    }
    const [{ type, data }] = children;
    if(type === 'text') {
      return <img alt={data} className='reactml-image' src={data} />;
    }
    return null;
  },
  'quote': basicHtmlWrapper('blockquote', 'reactml-quote'),
  'code': basicHtmlWrapper('pre', 'reactml-code'),
  'list': basicHtmlWrapper('ul', 'reactml-list'),
  'item': basicHtmlWrapper('li', 'reactml-item'),
};
