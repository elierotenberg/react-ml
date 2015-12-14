/* eslint-disable react/jsx-key */
import React from 'react';

function basicHtmlWrapper(tagName, className, style) {
  return (attrs, children, transform) => React.createElement(tagName, { className, style }, transform(children));
}

export default {
  'b': basicHtmlWrapper('span', 'reactml-b', { fontWeight: 'bold' }),
  'i': basicHtmlWrapper('span', 'reactml-i', { fontStyle: 'italic' }),
  'u': basicHtmlWrapper('span', 'reactml-b', { textDecoration: 'underline' }),
  's': basicHtmlWrapper('span', 'reactml-s', { textDecoration: 'line-through' }),
  'url': ({ target }, children, transform) => {
    if(typeof target === 'string') {
      return <a className='reactml-url' href={target}>{transform(children)}</a>;
    }
    if(children.length === 0) {
      return transform(children);
    }
    const [{ type, data }] = children;
    if(type === 'text') {
      return <a className='reactml-url' href={data}>{data}</a>;
    }
    return transform(children);
  },
  'img': ({ source }, children, transform) => {
    if(typeof target === 'string' && typeof children === 'string') {
      return <img alt={children} className='reactml-img' src={source} />;
    }
    if(children.length === 0) {
      return transform(children);
    }
    const [{ type, data }] = children;
    if(type === 'text') {
      return <img alt={data} className='reactml-img' src={data} />;
    }
    return transform(children);
  },
  'quote': basicHtmlWrapper('blockquote', 'reactml-quote'),
  'code': basicHtmlWrapper('pre', 'reactml-code'),
  'list': basicHtmlWrapper('ul', 'reactml-list'),
  'item': basicHtmlWrapper('li', 'reactml-item'),
};
