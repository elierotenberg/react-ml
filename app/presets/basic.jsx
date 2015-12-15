/* eslint-disable react/jsx-key */
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
    if(typeof target === 'string') {
      return React.createElement('a', {
        className: 'reactml-url',
        href: url,
        children: transformChildren(children),
      });
    }
    if(children.length === 0) {
      return null;
    }
    const [{ type, data }] = children;
    if(type === 'text') {
      return React.createElement('a', {
        className: 'reactml-url',
        href: data,
        children: data,
      });
    }
    return null;
  },
  'image': ({ url }, children) => {
    if(typeof url === 'string' && typeof children === 'string') {
      return React.createElement('img', {
        alt: children,
        className: 'reactml-img',
        src: url,
      });
    }
    if(children.length === 0) {
      return null;
    }
    const [{ type, data }] = children;
    if(type === 'text') {
      return React.createElement('img', {
        alt: data,
        className: 'reactml-img',
        src: data,
      });
    }
    return null;
  },
  'quote': basicHtmlWrapper('blockquote', 'reactml-quote'),
  'code': basicHtmlWrapper('pre', 'reactml-code'),
  'list': basicHtmlWrapper('ul', 'reactml-list'),
  'item': basicHtmlWrapper('li', 'reactml-item'),
};
