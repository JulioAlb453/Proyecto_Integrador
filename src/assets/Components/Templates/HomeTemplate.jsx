import React from 'react';
import Footer from '../Molecule/Footer';
import Navbar from '../Molecule/Navbar';
import  Carousel from '../Organism/CarrouselOrganism';
import TitleAtom from '../Atoms/Title';
import CardInformativo from '../Molecule/CardInformativo';
import VisionSection from '../Organism/VisionSection';
import MissionSection from '../Organism/MissionSection';
import '../Styles/templates/HomeTemplate.css';

function HomeTemplate() {

  const program = [
    {
      imgSrc: "https://becas.news/wp-content/uploads/Asi-es-como-puedes-hacer-tu-registro-a-Mujer-es-poder.jpg",
      imgAlt: "Imagen destacada 1",
      description: ["Este es otro apoyo:", "aquí vendrá toda la descripción de este otro programa"],
    },
    {
      imgSrc: "https://tvazteca.brightspotcdn.com/dims4/default/3198725/2147483647/strip/true/crop/1280x720+0+0/resize/928x522!/format/jpg/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F4c%2F28%2F2c576d514615ac73f17a1dff2c60%2Fescasez-de-agua-26.jpg",
      imgAlt: "Imagen destacada 2",
      description: ["Este es otro apoyo:", "aquí vendrá toda la descripción de este otro programa", "aquí vendrá toda la descripción de este otro programa"],
    },
  ];

  const news = [
    {
      imgSrc: "https://www.elsoldemexico.com.mx/mexico/politica/8uzwr6-pri-mujeres-cortesia.jpeg/ALTERNATES/LANDSCAPE_768/PRI%20mujeres%20CORTESIA.jpeg",
      imgAlt: "Imagen destacada 3",
      description: ["Este es otro apoyo:", "aquí vendrá toda la descripción o programa", "aquí vendrá toda la descripción de este otro programa"],
    },
    {
      imgSrc: "https://www.canaldelcongreso.gob.mx/assets/img/noticias/0f68afd242fdc35fd53f207de8a85e8f.jpg",
      imgAlt: "Imagen destacada 4",
      description: ["Este es otro apoyo:", "aquí vendrá toda la descripción de este otro programa", "aquí vendrá toda la descripción de este otro programa"],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="main-section">
        {/* Banner Principal */}
        <div className="banner">
          <h1>Promoviendo la igualdad de genero y el</h1>
          <h1>empoderamiento de la mujer.</h1>
          {/* Aquí puedes agregar una imagen representativa */}
        </div>
        
        {/* Sección de Carrusel */}
        <div className='carrousel-section'>
          <Carousel />
        </div>
        
        {/* Sección de Apoyos y Noticias */}
        <div className="apoyos-noticias-section">
          {/* Apoyos */}
          <div className="programas-section">
            <TitleAtom text="Apoyos Destacados" />
            <div className="programas-destacados">
              {program.map((programItem, index) => (
                <CardInformativo
                  key={index}
                  imgSrc={programItem.imgSrc}
                  imgAlt={programItem.imgAlt}
                  description={programItem.description}
                />
              ))}
            </div>
          </div>
          
          {/* Noticias */}
          <div className="noticias-section">
            <TitleAtom text="Noticias y Actualizaciones" />
            <div className="noticias">
              {news.map((newsItem, index) => (
                <CardInformativo
                  key={index}
                  imgSrc={newsItem.imgSrc}
                  imgAlt={newsItem.imgAlt}
                  description={newsItem.description}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Sección de Misión y Visión */}
        <div className="mision-vision-section">
          {/* Visión */}
          <div className="vision-section">
            <TitleAtom text="Visión" />
            <VisionSection />
          </div>
          
          {/* Misión */}
          <div className="mission-section">
            <TitleAtom text="Misión" />
            <MissionSection />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeTemplate;
