import React from 'react';
import PropTypes from 'prop-types';

class ReactMLUnderline extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <span className='reactml-u' style={{ textDecoration: 'underline' }}>
      {children}
    </span>;
  }
}

export default ReactMLUnderline;
