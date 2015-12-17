import React from 'react';

class ReactMLBold extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  render() {
    const { children } = this.props;
    return <span className='reactml-b' style={{ fontWeight: 'bold' }}>
      {children}
    </span>;
  }
}

export default ReactMLBold;
