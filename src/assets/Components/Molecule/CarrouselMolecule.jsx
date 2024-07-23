// src/components/molecules/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageAtom from '../Atoms/ImageAtom';
import PropTypes from 'prop-types';

function CarouselMolecule({ images }) {
  return (
    // el carrusel en si
                                     //tiempo entre las imagenes
    <Carousel showThumbs={false} autoPlay interval={5000} infiniteLoop>
      {images.map((image, index) => (
        <div key={index}>
          <ImageAtom src={image.src} alt={image.alt} />
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
