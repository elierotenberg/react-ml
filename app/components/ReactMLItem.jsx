import React from 'react';

class ReactMLItem extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  render() {
    const { children } = this.props;
    return <li className='reactml-item'>
      {children}
    </li>;
  }
}

export default ReactMLItem;
