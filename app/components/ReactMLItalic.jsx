import React from 'react';

class ReactMLItalic extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  render() {
    const { children } = this.props;
    return <span className='reactml-i' style={{ fontStyle: 'italic' }}>
      {children}
    </span>;
  }
}

export default ReactMLItalic;
