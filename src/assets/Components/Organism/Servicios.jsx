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
        <div className="service-item-conteiner">
          <div className="service-item">
            <h2>Citas Psicológicas</h2>
            <p>Ofrecemos servicios de apoyo psicológico para mujeres.</p>
            <Link to="/agendarCitas" className="button">
              Agendar cita psicológica
            </Link>
          </div>
          <div className="service-item">
            <h2>Citas Jurídicas</h2>
            <p>Asistencia legal especializada para mujeres.</p>
            <Link to="/agendarCitas" className="button">
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
