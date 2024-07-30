// src/Organisms/EventSectionOrganism.js
import React from 'react';
import Navbar from '../Molecule/Navbar';
import Footer from '../Molecule/Footer';
import EventData from '../Atoms/EventData';
import '../Styles/organism/EventSection.css'; // Asegúrate de crear este archivo de estilos

const events = [
  {
    title: "Evento 1",
    date: "01/09/2024",
    location: "Auditorio Principal",
    description: "Descripción del evento 1.",
    imgSrc: "https://www.capital21.cdmx.gob.mx/noticias/wp-content/uploads/2023/03/tiempodemujeres.jpg",
    imgAlt: "Evento 1",
  },
  {
    title: "Evento 2",
    date: "15/09/2024",
    location: "Sala de Conferencias",
    description: "Descripción del evento 2.",
    imgSrc: "https://sn.gob.mx/wp-content/uploads/2020/05/MUJER-SOBRE-RUEDA3-1024x683-1.jpg",
    imgAlt: "Evento 2",
  },
  // Agrega más eventos según sea necesario
];

function EventSectionOrganism() {
  return (
    <div className="app-container">
      <header className="navbar-container">
        <Navbar />
      </header>
      <main className="event-section-container">
        <div className="event-section-organism">
          {events.map((event, index) => (
            <EventData
              key={index}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              imgSrc={event.imgSrc}
              imgAlt={event.imgAlt}
            />
          ))}
        </div>
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default EventSectionOrganism;
