import React from "react";
import DetallesPerfil from "../Molecule/DetallesPerfil";
import DetallesCita from "../Molecule/ResumenCita";
import SeguimientoDenuncia from "../Molecule/SeguimientoDenuncia";
import "../Styles/organism/ProfileInfo.css";

function ProfileInfo() {
  return (
    <div className="profile-container">
      <div className="details-section">
        <div className="profile-details">
          <DetallesPerfil />
        </div>

        <div className="appointment-summary">
          <h2>Resumen de la Cita</h2>
          <DetallesCita />
        </div>
      </div>

      <div className="complaint-follow-up">
        <SeguimientoDenuncia />
      </div>
    </div>
  );
}

export default ProfileInfo;
