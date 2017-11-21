import React from 'react';
import PropTypes from 'prop-types';

class ReactMLParagraph extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return <div className='reactml-paragraph'>
      {this.props.children}
    </div>;
  }
}

export default ReactMLParagraph;
