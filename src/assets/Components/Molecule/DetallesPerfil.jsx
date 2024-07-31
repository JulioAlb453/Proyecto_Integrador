import React from "react";
import LabelProfile from "../Atoms/LabelAtom";
import ImageAtom from "../Atoms/ImageAtom";
import "../Styles/Molecule/ProfileDetail.css";

function DetallesPerfil() {
  return (
    <div className="perfil-detalles">
      
      <div className="profile-picture">
        <ImageAtom
          src="src\assets\img\user.webp" 
          alt="Foto de perfil"
        />
      </div>
      <div className="dataContainer">
      <LabelProfile strong="Fecha de nacimiento" text="XX/XX/XXXX" />
      <LabelProfile strong="Estado civil" text="Casada" />
      <LabelProfile 
        strong="Lugar de residencia"
        text="15 Sur Oriente Col. Palmas,"
      />
      <LabelProfile
        strong="Lugar de residencia"
        text="15 Sur Oriente Col. Palmas"
      />
      <LabelProfile
        strong="Lugar de residencia"
        text="15 Sur Oriente Col. Palmas"
      />
      <LabelProfile
        strong="Lugar de residencia"
        text="15 Sur Oriente Col. Palmas"
      />
      <LabelProfile
        strong="Lugar de residencia"
        text="15 Sur Oriente Col. Palmas"
      />
      <LabelProfile strong="Ocupación" text="Estudiante" /><br/>
      </div>
    </div>
  );
}

export default DetallesPerfil;
