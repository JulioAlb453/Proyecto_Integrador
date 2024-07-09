import React from "react";
import HighlightedProgram from "../../molecule/HighlightedProgram/HighlightedProgram";
import NewsSection from "../../molecule/NewsSection/NewsSection";
import Title from "../../atoms/Title";
import FooterOrganism from "../FooterOrganism";
import CarouselOrganism from "../CarouselOrganism";
import MissionVisionOrganism from "../MisionVisionOrganism";
import Navbar from "../Navbar";
import './ContentWrapper.css';

function ContentWrapper() {
  const programs = [
    {
      imgSrc:
        "https://becas.news/wp-content/uploads/Asi-es-como-puedes-hacer-tu-registro-a-Mujer-es-poder.jpg",
      imgAlt: "Imagen destacada 1",
      description: [
        "Este es otro apoyo:",
        "aquí vendrá toda la descripción de este otro programa",
      ],
    },
    {
      imgSrc:
        "https://tvazteca.brightspotcdn.com/dims4/default/3198725/2147483647/strip/true/crop/1280x720+0+0/resize/928x522!/format/jpg/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F4c%2F28%2F2c576d514615ac73f17a1dff2c60%2Fescasez-de-agua-26.jpg",
      imgAlt: "Imagen destacada 2",
      description: [
        "Este es otro apoyo:",
        "aquí vendrá toda la descripción de este otro programa",
        "aquí vendrá toda la descripción de este otro programa",
      ],
    },
  ];

  const news = [
    {
      imgSrc:
        "https://www.elsoldemexico.com.mx/mexico/politica/8uzwr6-pri-mujeres-cortesia.jpeg/ALTERNATES/LANDSCAPE_768/PRI%20mujeres%20CORTESIA.jpeg",
      imgAlt: "Imagen destacada 3",
      description: [
        "Noticia:",
        "aquí vendrá toda la descripción o programa",
        "aquí vendrá toda la descripción de este otro programa",
      ],
    },

    {
      imgSrc:
      "https://i0.wp.com/www3.gobiernodecanarias.org/medusa/ecoescuela/igualdad/files/2021/11/whatsapp-image-2021-11-23-at-9-13-02-am.jpeg?w=636&h=756&ssl=1",
      description: [
        "Noticia:",
        "aquí vendrá toda la descripción o programa",
        "aquí vendrá toda la descripción de este otro programa",
      ]
    }
  ];

  return (
    <div className="main-section">
      <Navbar/>
      <div className="CarouselOrganism">
        <CarouselOrganism />
      </div>
      <div className="content-wrapper">
        <div className="main-content1">
          <div className="title">
            <Title />
            Programas descatados
          </div>
          <div className="Programas_destacados">
            {programs.map((program, index) => (
              <HighlightedProgram
                key={index}
                imgSrc={program.imgSrc}
                imgAlt={program.imgAlt}
                description={program.description}
                className= 'image-conteiner'
              />
            ))}
          </div>
        </div>

        <div className="main-content2">
          <div className="title">
            <Title />
            Noticias relevantes
          </div>
          <div className="noticias">
            {news.map((newsItem, index) => (
              <NewsSection
                key={index}
                imgSrc={newsItem.imgSrc}
                imgAlt={newsItem.imgAlt}
                description={newsItem.description}
                className= 'image-conteiner'
              />
            ))}
          </div>
        </div>
      </div>
      <div className="MisionVisionOrgans-main">
      <div className="MissionVisionOrgans">
        <MissionVisionOrganism/>
      </div>

      </div>
      <FooterOrganism/>
    </div>
  );
}

export default ContentWrapper;
