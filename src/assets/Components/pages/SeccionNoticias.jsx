import React from "react";
import NewsSectionOrganism from "../Organism/NewsSectionOrganism";
import Navbar from '../Molecule/Navbar';
import Footer from '../Molecule/Footer';
import '../Styles/Page/SeccionNoticias.css';

const newsItems = [
  {
    title: "Noticia 1",
    text:
      "Durante mayo, los feminicidios repuntaron en un 31% en comparación con un mes anterior, por lo que, hasta el momento, con 80 casos, mayo se coloca como mes con la cifra más alta del año en casos de asesinatos de mujeres por razón de género. De igual forma repuntaron los homicidios dolosos, las agresiones y violencia familiar. " +
      "De acuerdo con cifras del Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública (SESNSP), entre enero y mayo de este año, se han registrado 331 delitos de feminicidio en todo el país, de los cuales 80 se presentaron en mayo pasado; 19 más que los reportados en abril.",
    imgSrc:
      "https://www.eleconomista.com.mx/__export/1719382030660/sites/eleconomista/img/2024/06/26/marcha_mujeres_violencia.jpg_270939306.jpg",
    imgAlt: "Noticia 1",
    date: "20/04/2024",
  },
  {
    title: "Noticia 2",
    text:
      "La desigualdad es un obstáculo para el desarrollo personal, y dentro de las empresas no es la excepción. En este sentido, si las compañías aún no implementan estrategias y/o políticas a favor de la igualdad de género, tendrán problemas dentro del mercado. " +
      "Dentro del panel He For She: Hombres como aliados en la igualdad de género, organizado por Pacto Mundial Red México 2024, se abordó el papel de los hombres como aliados en la lucha por la equidad de género.",
    imgSrc:
      "https://www.eleconomista.com.mx/__export/1716555780138/sites/eleconomista/img/2024/05/24/mujeres-junta-directiva.jpg_1758632412.jpg",
    imgAlt: "Noticia 2",
    date: "20/02/2023",
  },
  // Agrega más noticias según sea necesario
];

const App = () => {
  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="NewsSection">
        <NewsSectionOrganism newsItems={newsItems} />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
