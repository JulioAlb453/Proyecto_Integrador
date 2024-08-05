// src/Organisms/EventSectionOrganism.js
import React, { useEffect, useState } from "react";
import Navbar from '../Molecule/Navbar';
import Footer from '../Molecule/Footer';
import TitleNews from "../Atoms/TitleNews";// Asegúrate de que la ruta sea correcta
import { getAllEventos } from "../services/eventos";
import '../Styles/Page/SeccionNoticias.css';

const EventSectionOrganism = () => {
  const [eventItems, setEventItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllEventos()
      .then(data => {
        setEventItems(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar los eventos');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando eventos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="app-container">
      <header className="navbar-container">
        <Navbar />
      </header>
      <main className="news-section-container">
        <div className="news-section-organism">
          {eventItems.map((eventItem, index) => (
            <div key={index} className="news-item">
              <div className="content">
                <TitleNews title={eventItem.titulo} className="title" />
                <p className="text">{eventItem.descripcion}</p>
                <p className="date">Fecha del Evento: {new Date(eventItem.fechaEvento).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p className="time">Horario: {eventItem.horario}</p>
                <p className="address">Dirección: {eventItem.calle}, {eventItem.colonia}, {eventItem.numExterior}, {eventItem.codigoPostal}</p>
                <p className="inscription">Fin de Inscripción: {new Date(eventItem.finalInscripcion).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
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
