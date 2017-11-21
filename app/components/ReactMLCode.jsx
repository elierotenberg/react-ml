import React from 'react';
import PropTypes from 'prop-types';

class ReactMLCode extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <pre className='reactml-code'>
      {children}
    </pre>;
  }
}

export default ReactMLCode;
