/* eslint-disable react/jsx-key */
import _ from 'lodash';
import React from 'react';

import ReactMLBold from '../components/ReactMLBold';
import ReactMLCode from '../components/ReactMLCode';
import ReactMLImage from '../components/ReactMLImage';
import ReactMLItalic from '../components/ReactMLItalic';
import ReactMLItem from '../components/ReactMLItem';
import ReactMLLink from '../components/ReactMLLink';
import ReactMLList from '../components/ReactMLList';
import ReactMLQuote from '../components/ReactMLQuote';
import ReactMLStrikethrough from '../components/ReactMLStrikethrough';
import ReactMLUnderline from '../components/ReactMLUnderline';

export default {
  'b': (attribs, children, transformChildren) =>
    <ReactMLBold>{transformChildren(children)}</ReactMLBold>,

  'code': (attribs, children, transformChildren) =>
    <ReactMLCode>{transformChildren(children)}</ReactMLCode>,

  'i': (attribs, children, transformChildren) =>
    <ReactMLItalic>{transformChildren(children)}</ReactMLItalic>,

  'image': ({ url }, children) => {
    if(typeof url === 'string') {
      if(_.every(children, ({ type }) => type === 'text')) {
        return <ReactMLImage label={children.map(({ data }) => data).join('')} url={url} />;
      }
      return <ReactMLImage label={url} url={url} />;
    }
    if(children.length === 0) {
      return null;
    }
    const [{ type, data }] = children;
    if(type === 'text') {
      return <ReactMLImage label={data} url={data} />;
    }
    return null;
  },

  'item': (attribs, children, transformChildren) =>
    <ReactMLItem>{transformChildren(children)}</ReactMLItem>,

  'link': ({ url }, children, transformChildren) => {
    if(typeof url === 'string') {
      return <ReactMLLink url={url}>
        {transformChildren(children)}
      </ReactMLLink>;
    }
    if(children.length === 0) {
      return null;
    }
    const [{ type, data }] = children;
    if(type === 'text') {
      return <ReactMLLink url={data}>
        {data}
      </ReactMLLink>;
    }
    return null;
  },

  'list': (attribs, children, transformChildren) =>
    <ReactMLList>{transformChildren(children)}</ReactMLList>,

  'quote': (attribs, children, transformChildren) =>
    <ReactMLQuote>{transformChildren(children)}</ReactMLQuote>,

  's': (attribs, children, transformChildren) =>
    <ReactMLStrikethrough>{transformChildren(children)}</ReactMLStrikethrough>,

  'u': (attribs, children, transformChildren) =>
    <ReactMLUnderline>{transformChildren(children)}</ReactMLUnderline>,
};
