import React from 'react';

/* eslint-disable react/jsx-key */
export default {
  'h1': (attrs, children, transformChildren) => <h1 children={transformChildren(children)} />,
  'div': (attrs, children, transformChildren) => <div children={transformChildren(children)} />,
};
