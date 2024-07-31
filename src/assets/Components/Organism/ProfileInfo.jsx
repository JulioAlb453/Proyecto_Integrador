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
        <div className="seguimientos">
        <div className="resumen-cita">
          <h3>RESUMEN DE LA CITA</h3>
          <DetallesCita />
        </div>
      <div className="seguimiento-denuncias">
        <SeguimientoDenuncia />
      </div></div></div>
    </div>
  );
}

export default ProfileInfo;
