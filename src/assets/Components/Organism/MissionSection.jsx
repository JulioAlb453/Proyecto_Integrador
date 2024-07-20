// src/organisms/MissionSection.js
import React from 'react';
import Program from '../Molecule/Program';

function MissionSection() {
  return (
    <div className="mission-section">
      <Program
        imgSrc="https://www.elsoldeirapuato.com.mx/local/hk8c3s-luis-ricardo/alternates/LANDSCAPE_400/Luis%20Ricardo"
        imgAlt="Imagen de Misión"
        description={[
          'Sección de noticias:',
          'aquí vendrá toda la descripción de este otro programa',
          'aquí vendrá toda la descripción de este otro programa',
        ]}
      />
    </div>
  );
}

export default MissionSection;
