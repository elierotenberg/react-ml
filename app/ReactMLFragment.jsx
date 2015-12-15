import React from 'react';

class ReactMLFragment extends React.Component {
  static displayName = 'ReactMLFragment';
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return this.props.children;
  }
}

export default ReactMLFragment;
