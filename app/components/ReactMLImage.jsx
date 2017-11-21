import React from 'react';
import PropTypes from 'prop-types';

class ReactMLImage extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    url: PropTypes.string,
  };

  render() {
    const { label, url } = this.props;
    return <img alt={label} className='reactml-image' src={url} />;
  }
}

export default ReactMLImage;
