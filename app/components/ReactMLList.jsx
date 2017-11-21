import React from 'react';
import PropTypes from 'prop-types';

class ReactMLList extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <ul className='reactml-list'>
      {children}
    </ul>;
  }
}

export default ReactMLList;
