import React from 'react';
import PropTypes from 'prop-types';

class ReactMLItalic extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <span className='reactml-i' style={{ fontStyle: 'italic' }}>
      {children}
    </span>;
  }
}

export default ReactMLItalic;
