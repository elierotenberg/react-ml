import React from 'react';

class ReactMLFragment extends React.Component {
  static displayName = 'ReactMLFragment';
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return <div className='reactml-fragment'>
      {this.props.children}
    </div>;
  }
}

export default ReactMLFragment;
