// src/components/molecules/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselImage from '../Atoms/CarrouselImage';
import PropTypes from 'prop-types';

function CarouselMolecule({ images }) {
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

CarouselMolecule.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselMolecule;
