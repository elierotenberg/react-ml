import React from 'react';

class ReactMLList extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  render() {
    const { children } = this.props;
    return <ul className='reactml-list'>
      {children}
    </ul>;
  }
}

export default ReactMLList;
