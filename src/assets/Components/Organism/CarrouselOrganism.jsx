// src/components/organisms/CarouselOrganism.js
import React from 'react';
import CarouselMolecule from '../Molecule/CarrouselMolecule';
import '../Styles/organism/CarrouselOrganism.css'; 

function CarouselOrganism() {
  const images = [
    {
      src: 'https://www.educacionchiapas.gob.mx/wp-content/uploads/2021/10/infografia1-equidad-de-genero-corregido-texto-v2.jpg',
      alt: 'image 1',
    },
    {
      src: 'http://seigen.chiapas.gob.mx/nom025/img/politica/00.png',
      alt: 'image 2',
    },
    {
      src: 'http://seigen.chiapas.gob.mx/nom025/img/politica/01.png',
      alt: 'image 3',
    },
    {
      src: 'http://seigen.chiapas.gob.mx/nom025/img/politica/02.png',
      alt: 'image 4',
    },
  ];

  return (
    <div className="container-carousel">
      <CarouselMolecule images={images} />
    </div>
  );
}

export default CarouselOrganism;
