import React from "react";
import "../Styles/organism/ProfileInfo.css";
import ImageAtom from "../Atoms/ImageAtom";
import LabelProfile from "../Atoms/LabelAtom";

function AdminInfo() {
  return (
    <div className="profile-content">
      <div className="details-content">
        <div className="profile-info">
        <div className="perfil-detalles">
      <LabelProfile strong="Nombre" text="Nombre: Ana Belen" />
      <LabelProfile strong="Apellido Paterno" text="Apellido paterno: Núñez" />
      <LabelProfile strong="Apellido Materno" text="Apellido materno: Hernandez" />
      <div className="profile-picture">
        <ImageAtom
          src="src\assets\img\user.webp"
          alt="Foto de perfil"
        />
      </div>
      <LabelProfile strong="Telefono" text="Numero telefonico: 9614498464" />
      <LabelProfile strong="Ocupación" text="Ocupacion: Trabajador" />
    </div>
        </div>
      </div>
    {/* Div Denuncias */}
    </div>
  );
}

export default AdminInfo;
