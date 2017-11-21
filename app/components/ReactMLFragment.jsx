import React from 'react';
import PropTypes from 'prop-types';

class ReactMLFragment extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return <div className='reactml-fragment'>
      {this.props.children}
    </div>;
  }
}

export default ReactMLFragment;
