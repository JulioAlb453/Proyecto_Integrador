import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'; // Aquí puedes añadir tus estilos personalizados


function MyCarousel() {
  return (
    <div className='Conteiner-MyCarrousel'>
      <Carousel showThumbs={false} autoPlay interval={5000} infiniteLoop>
        <div>
          <img
            src="http://seigen.chiapas.gob.mx/nom025/img/politica/00.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src="http://seigen.chiapas.gob.mx/nom025/img/politica/01.png"
            alt="image 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src="http://seigen.chiapas.gob.mx/nom025/img/politica/02.png"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
