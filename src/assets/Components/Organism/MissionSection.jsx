import React from 'react';
import CardInformativo from '../Molecule/CardInformativo';

//Seecion de Mision
function MissionSection() {
  return (
    <div className="mission-section">
      <CardInformativo
        imgSrc="src\assets\img\foto2.jpeg"
        imgAlt="Imagen de Misión"
        description={[
          "Promover la igualdad de género y empoderar a las mujeres de Tuxtla Gutiérrez mediante la provisión de recursos, información, y apoyo. Nuestra plataforma, Futuro Igualitario, ofrece acceso a servicios esenciales, fomenta la comunidad y facilita el cambio hacia un futuro más justo e inclusivo para todas las ciudadanas."
        ]}
      />
    </div>
  );
}

export default MissionSection;
