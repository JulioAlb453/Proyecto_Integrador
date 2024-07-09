import React from "react";
import VisionSection from "../VisionSection";
import MissionSection from "../MissionSection";
import "./MissionVisionOrganism.css";

function MissionVisionOrganism() {
  return (
    <div className="mission-vision-container">
      <MissionSection
        imgSrc="https://www.elsoldeirapuato.com.mx/local/hk8c3s-luis-ricardo/alternates/LANDSCAPE_400/Luis%20Ricardo" // Reemplaza con la URL real de la imagen
        imgAlt="Imagen de Misión"
        title="Nuestra Misión"
        description="Nuestra misión es promover la igualdad de género y empoderar a las mujeres a través de diversas iniciativas y programas.."
      />
      <VisionSection
        imgSrc="https://salud.morelos.gob.mx/sites/salud.morelos.gob.mx/files/noticias/principal/llama_secretario_de_salud_a_trabajar_en_equipo_para_impulsar_un_morelos_mas_sano1.png" // Reemplaza con la URL real de la imagen
        imgAlt="Imagen de Visión"
        title="Nuestra Visión"
        description="Nuestra visión es lograr una sociedad donde las mujeres y hombres tengan iguales oportunidades y derechos, y donde la igualdad de género sea una realidad."
      />
    </div>
  );
}

export default MissionVisionOrganism;
