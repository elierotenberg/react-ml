import React from 'react';

class ReactMLParagraph extends React.Component {
  static displayName = 'ReactMLParagraph';
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return <div className='reactml-paragraph'>
      {this.props.children}
    </div>;
  }
}

export default ReactMLParagraph;
