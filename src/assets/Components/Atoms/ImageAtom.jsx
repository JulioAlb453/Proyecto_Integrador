import React from 'react';
import PropTypes from 'prop-types';

const ImageAtom = ({ src, alt, className = '' }) => {
  return <img src={src} alt={alt} className={className} />;
};

ImageAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ImageAtom;
