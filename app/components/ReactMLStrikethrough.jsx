import React from 'react';

class ReactMLStrikethrough extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  render() {
    const { children } = this.props;
    return <span className='reactml-s' style={{ textDecoration: 'line-through' }}>
      {children}
    </span>;
  }
}

export default ReactMLStrikethrough;
