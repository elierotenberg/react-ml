import React from 'react';

class ReactMLCode extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  render() {
    const { children } = this.props;
    return <pre className='reactml-code'>
      {children}
    </pre>;
  }
}

export default ReactMLCode;
