import React from "react";
import DetallesPerfil from "../Molecule/DetallesPerfil";
import DetallesCita from "../Molecule/ResumenCita";
import SeguimientoDenuncia from "../Molecule/SeguimientoDenuncia";
import "../Styles/organism/ProfileInfo.css";

function ProfileInfo() {
  return (
    <div className="profile-content">
      <div className="details-content">
        <div className="profile-info">
          <DetallesPerfil />
        </div>

        <div className="resumen-cita">
          <h2>RESUMEN DE LA CITA</h2>
          <DetallesCita />
        </div>
      </div>
    {/* Div Denuncias */}
      <div className="seguimiento-denuncias">
        <SeguimientoDenuncia />
      </div>
    </div>
  );
}

export default ProfileInfo;
