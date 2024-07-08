import React from 'react';
import PropTypes from 'prop-types';

function CarouselImage({ src, alt }) {
  return <img src={src} alt={alt} className="carousel-image" />;
}

CarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CarouselImage;