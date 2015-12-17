import React from 'react';

class ReactMLUnderline extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  render() {
    const { children } = this.props;
    return <span className='reactml-u' style={{ textDecoration: 'underline' }}>
      {children}
    </span>;
  }
}

export default ReactMLUnderline;
