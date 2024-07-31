import React from "react";
import "../Styles/organism/ProfileInfo.css";
import ImageAtom from "../Atoms/ImageAtom";
import LabelProfile from "../Atoms/LabelAtom";
import '../Styles/organism/adminPerfil.css';

function AdminInfo() {
  return (
    <div className="profile-content1">
      <div className="details-content1">
        <div className="profile-info1">
          <div className="perfil-detalles1">
            <div className="profile-picture1">
              <ImageAtom
                src="src/assets/img/user.webp"
                alt="Foto de perfil"
              />
            </div>
            <LabelProfile strong="Nombre" text="Nombre: Ana Belen" />
            <LabelProfile strong="Apellido Paterno" text="Apellido paterno: Núñez" />
            <LabelProfile strong="Apellido Materno" text="Apellido materno: Hernandez" />
            <LabelProfile strong="Telefono" text="Numero telefonico: 9614498464" />
            <LabelProfile strong="Ocupación" text="Ocupacion: Trabajador" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInfo;
