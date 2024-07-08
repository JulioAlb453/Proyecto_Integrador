import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselImage from '../../atoms/CarrouselImage';
import PropTypes from 'prop-types';

function CarouselComponent({ images }) {
  return (
    <Carousel showThumbs={false} autoPlay interval={5000} infiniteLoop>
      {images.map((image, index) => (
        <div key={index}>
          <CarouselImage src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
}

CarouselComponent.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselComponent;
