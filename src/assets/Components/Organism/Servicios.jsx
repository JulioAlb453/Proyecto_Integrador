import React from "react";
import { Link } from "react-router-dom";
import "../Styles/organism/Service.css";
import Navbar from "../Molecule/Navbar";
import Footer from "../Molecule/Footer";

function ServiceView() {
  return (
    <>
      <Navbar />
      {/* Contenedor principal */}
      <div className="service-view-container">
        {/* Contenedor para los items de servicio a la izquierda */}
        <div className="service-item-container-left">
          {/* Contenedor Citas Psicológicas */}
          <div className="service-item">
            <h2>Citas Psicológicas</h2>
            <p>Ofrecemos servicios de apoyo psicológico para mujeres.</p>
            <Link to="/CitaPsicologica" className="button-link">
              Agendar cita psicológica
            </Link>
          </div>
        </div>
        {/* Contenedor para los items de servicio a la derecha */}
        <div className="service-item-container-right">
          {/* Contenedor Citas Jurídicas */}
          <div className="service-item">
            <h2>Citas Jurídicas</h2>
            <p>Asistencia legal especializada para mujeres.</p>
            <Link to="/CitaJuridica" className="button-link">
              Agendar cita jurídica
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServiceView;
