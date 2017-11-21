import React from 'react';
import PropTypes from 'prop-types';

class ReactMLStrikethrough extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <span className='reactml-s' style={{ textDecoration: 'line-through' }}>
      {children}
    </span>;
  }
}

export default ReactMLStrikethrough;
