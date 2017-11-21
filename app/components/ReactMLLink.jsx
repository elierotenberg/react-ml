import React from 'react';
import PropTypes from 'prop-types';

class ReactMLLink extends React.Component {
  static propTypes = {
    children: PropTypes.node,
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
