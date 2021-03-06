import React from 'react';

class ReactMLImage extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    url: React.PropTypes.string,
  };

  render() {
    const { label, url } = this.props;
    return <img alt={label} className='reactml-image' src={url} />;
  }
}

export default ReactMLImage;
