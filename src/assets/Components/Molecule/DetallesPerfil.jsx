import React from "react";
import LabelProfile from "../Atoms/LabelAtom";
import ImageAtom from "../Atoms/ImageAtom";
import "../Styles/Molecule/ProfileDetail.css";

function DetallesPerfil() {
  return (
    <div className="perfil-detalles">
      <LabelProfile strong="Nombre" text="Ana Belen Nuñez Hernandez" />
      <div className="profile-picture">
        <ImageAtom
          src="https://img.wattpad.com/0227e689fb13e2f2b397fcd91aa45a4f68807fae/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d71454769566b7646754d4773413d3d2d32362e313630643937663637333934326637323934313532333132303336312e6a7067?s=fit&w=720&h=720"
          alt="Foto de perfil"
        />
      </div>
      <LabelProfile strong="Fecha de nacimiento" text="XX/XX/XXXX" />
      <LabelProfile strong="Estado civil" text="Casada" />
      <LabelProfile
        strong="Lugar de residencia"
        text="15 Sur Oriente Col. Palmas"
      />
      <LabelProfile strong="Ocupación" text="Estudiante" />
    </div>
  );
}

export default DetallesPerfil;
