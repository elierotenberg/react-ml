import React from 'react';
import PropTypes from 'prop-types';

class ReactMLItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <li className='reactml-item'>
      {children}
    </li>;
  }
}

export default ReactMLItem;
