import React, { useEffect, useState } from "react";
import LabelProfile from "../Atoms/LabelAtom";
import ImageAtom from "../Atoms/ImageAtom";
import "../Styles/Molecule/ProfileDetail.css";
import { getDatosPersonales } from "../services/datosUsuario";

function DetallesPerfil() {
  const [userData, setUserData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    estadoCivil: '',
    edad: '',
    idUsuario: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDatosPersonales();
      console.log();
      setUserData(result[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="perfil-detalles">
      <div className="profile-picture">
        <ImageAtom
          src="src/assets/img/user.webp"
          alt="Foto de perfil"
        />
      </div>
      <div className="dataContainer">
        <p className="p1">Nombre:<LabelProfile strong="Nombre" text={userData.nombre} /><br /></p>
        <p className="p1">Apellido paterno: <LabelProfile strong="Apellido Paterno" text={userData.apellidoPaterno} /><br/></p>
        <p className="p1">Apellido Materno: <LabelProfile strong="Apellido Materno" text={userData.apellidoMaterno} /><br/></p>
        <p className="p1">Telefono: <LabelProfile strong="Teléfono" text={userData.telefono} /><br/></p>
        <p className="p1">Estado civil: <LabelProfile strong="Estado Civil" text={userData.estadoCivil} /><br/></p>
        <p className="p1">Edad: <LabelProfile strong="Edad" text={userData.edad} /><br/></p>
        <p className="p1">ID usuario: <LabelProfile strong="ID de Usuario" text={userData.idUsuario} /><br/></p>
      </div>
    </div>
  );
}

export default DetallesPerfil;
