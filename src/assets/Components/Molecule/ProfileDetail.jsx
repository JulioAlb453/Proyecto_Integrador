import React from 'react';
import LabelProfile from '../Atoms/LabelAtom'
import ImageAtom from '../Atoms/ImageAtom';

function ProfileDetail() {
    return (
      <div className="perfil-detalles">
        <LabelProfile strong="Nombre" text="Ana Belen Nuñez Hernandez" />
        <div className="profile-picture">
          <ImageAtom src="path/to/profile-picture.png" alt="Foto de perfil" />
        </div>
        <LabelProfile strong="Fecha de nacimiento" text="XX/XX/XXXX" />
        <LabelProfile strong="Estado civil" text="Casada" />
        <LabelProfile strong="Lugar de residencia" text="15 Sur Oriente Col. Palmas" />
        <LabelProfile strong="Ocupación" text="Estudiante" />
      </div>
    );
  }
  
  export default ProfileDetail;