import React from 'react';
import PropTypes from 'prop-types';

class ReactMLQuote extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <blockquote className='reactml-quote'>
      {children}
    </blockquote>;
  }
}

export default ReactMLQuote;
