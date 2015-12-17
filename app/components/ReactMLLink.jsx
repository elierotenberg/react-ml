import React from 'react';

class ReactMLLink extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    url: React.PropTypes.string,
  };

  render() {
    const { children, url } = this.props;
    return <a className='reactml-link' href={url}>
      {children}
    </a>;
  }
}

export default ReactMLLink;
