import React from 'react';
import CardInformativo from '../Molecule/CardInformativo';

//Seccion de vision
function VisionSection() {
  return (
    <div className="vision-section">
      <CardInformativo
        imgSrc='src\assets\img\foto3.jpeg'
        imgAlt="Imagen de Visión"
        description={[
        "Ser una referencia municipal en el estado de Chiapas en la promoción de la igualdad de género, donde todas las mujeres de Tuxtla Gutiérrez vivan en un  entorno de equidad, respeto y oportunidades equitativas, empoderadas para alcanzar su máximo potencial y contribuir  activamente al desarrollo de la sociedad."
        ]}
      />
    </div>
  );
}

export default VisionSection;
