import React from 'react';
import Label from '../Atoms/Label'
import ImageAtom from '../Atoms/ImageAtom';

function ProfileDetail() {
    return (
      <div className="perfil-detalles">
        <Label strong="Nombre" text="Ana Belen Nuñez Hernandez" />
        <div className="profile-picture">
          <ImageAtom src="path/to/profile-picture.png" alt="Foto de perfil" />
        </div>
        <Label strong="Fecha de nacimiento" text="XX/XX/XXXX" />
        <Label strong="Estado civil" text="Casada" />
        <Label strong="Lugar de residencia" text="15 Sur Oriente Col. Palmas" />
        <Label strong="Ocupación" text="Estudiante" />
      </div>
    );
  }
  
  export default ProfileDetail;