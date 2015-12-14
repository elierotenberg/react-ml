import React from 'react';

/* eslint-disable react/jsx-key */
export default {
  'h1': (attrs, children, transform) => <h1>
      {transform(children)}
      </h1>,
  'div': (attrs, children, transform) => <div>
      {transform(children)}
    </div>,
};
