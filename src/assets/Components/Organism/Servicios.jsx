import React from "react";
import { Link } from "react-router-dom";
import "../Styles/organism/Service.css";
import Navbar from "../Molecule/Navbar";
import Footer from "../Molecule/Footer";

function ServiceView() {
  return (
    <>
      <Navbar />
      <div className="service-view-container">
        <div className="service-item-container-left">
          <div className="service-item">
            <h2>Citas Psicológicas</h2>
            <p>Ofrecemos servicios de apoyo psicológico para mujeres.</p>
            <Link to="/CitaPsicologica" className="service-button-link">
              Agendar cita psicológica
            </Link>
          </div>
        </div>
        <div className="service-item-container-right">
          <div className="service-item">
            <h2>Citas Jurídicas</h2>
            <p>Asistencia legal especializada para mujeres.</p>
            <Link to="/CitaJuridica" className="service-button-link">
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
