import React from 'react';
import CardInformativo from '../Molecule/CardInformativo';

//Seccion de vision
function VisionSection() {
  return (
    <div className="vision-section">
      <CardInformativo
        imgSrc="https://salud.morelos.gob.mx/sites/salud.morelos.gob.mx/files/noticias/principal/llama_secretario_de_salud_a_trabajar_en_equipo_para_impulsar_un_morelos_mas_sano1.png"
        imgAlt="Imagen de Visión"
        description={[
          'Sección de noticias:',
          'aquí vendrá toda la descripción de este otro programa',
          'aquí vendrá toda la descripción de este otro programa',
        ]}
      />
    </div>
  );
}

export default VisionSection;
