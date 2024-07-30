import React from 'react';
import Slider from 'react-slick';
import '../Styles/Molecule/Carousel.css';
import foto1 from '../../img/foto1.jpeg';
import foto2 from '../../img/foto2.jpeg';
import foto3 from '../../img/foto3.jpeg';
import foto4 from '../../img/foto4.jpeg';

const images = [
    foto1,
    foto2,
    foto3,
    foto4
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000, // Cambiar cada 10 segundos
        arrows: true, // Mostrar flechas de navegación
        
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
