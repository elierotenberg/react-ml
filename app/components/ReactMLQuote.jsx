import React from 'react';

class ReactMLQuote extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  render() {
    const { children } = this.props;
    return <blockquote className='reactml-quote'>
      {children}
    </blockquote>;
  }
}

export default ReactMLQuote;
