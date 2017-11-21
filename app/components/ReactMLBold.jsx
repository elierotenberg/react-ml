import React from 'react';
import PropTypes from 'prop-types';

class ReactMLBold extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <span className='reactml-b' style={{ fontWeight: 'bold' }}>
      {children}
    </span>;
  }
}

export default ReactMLBold;
