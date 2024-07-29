import React from "react";
import Footer from "../Molecule/Footer";
import Navbar from "../Molecule/Navbar";
import TitleAtom from "../Atoms/Title";
import CardInformativo from "../Molecule/CardInformativo";
import VisionSection from "../Organism/VisionSection";
import MissionSection from "../Organism/MissionSection";
import '../Styles/templates/SobreNosotros.css';

export default function SobreNosotros() {
  const aboutUs = [
    {
      imgSrc: "https://pbs.twimg.com/media/GS28s9tWwAA0VYV?format=jpg&name=large",
      imgAlt: "Imagen destacada 1",
      description: [
        "Futuro igualitario es una página para todas las ciudadanas de la ciudad de Tuxtla Gutierrez.",
        "Nuestro objetivo es promover la igualdad de género y proporcionar recursos útiles para las mujeres.",
        "Ofrecemos una plataforma donde las mujeres pueden acceder a información, apoyo y servicios.",
        "Únete a nuestra comunidad y sé parte del cambio hacia un futuro igualitario."
      ],
    },
  ];

  return (
    <div className="sobre-nosotros">
      <Navbar />
      <div className="sobre-nosotros-container">
        <div className="sobre-nosotros-banner">
          <h1>Sobre nosotros</h1>
        </div>
        <div className="sobre-nosotros-card">
            
          <div className="sobre-nosotros-card-FI">
            <TitleAtom text="¿Qué es Futuro Igualitario?" />
          </div>
          <div className="sobre-nosotros-card-info">
            {aboutUs.map((info, index) => (
              <CardInformativo
                key={index}
                imgSrc={info.imgSrc}
                imgAlt={info.imgAlt}
                description={info.description}
                className="card-informativo"
              />
            ))}
          </div>
          <div className="sobre-nosotros-card-mision-vision-section">
            <div className="sobre-nosotros-card-mision"> 
              <TitleAtom text="Misión"/>
              <MissionSection/>
            </div>
            <div className="sobre-nosotros-card-vision">
              <TitleAtom text="Visión"/>
              <VisionSection/>
            </div>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}
