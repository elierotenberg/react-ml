import React from 'react';

/* eslint-disable react/jsx-key */
export default {
  h1(attribs, children, transformChildren) {
    return <h1>
      {transformChildren(children)}
    </h1>;
  },

  div(attribs, children, transformChildren) {
    return <div>
      {transformChildren(children)}
    </div>;
  },
};
