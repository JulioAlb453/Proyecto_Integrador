import React, { useState, useEffect } from "react";
import "../Styles/organism/ProfileInfo.css";
import ImageAtom from "../Atoms/ImageAtom";
import LabelProfile from "../Atoms/LabelAtom";
import '../Styles/organism/adminPerfil.css';
import { getTrabajador } from "../services/datosUsuario";

function AdminInfo() {
  const [trabajador, setTrabajador] = useState({
    nombreTrabajadores: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefonoTrabajador: '',
    idTrabajador: '',
    idUsuario: ''
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getTrabajador();console.log(data); // Verifica la respuesta de la API aquí
      setTrabajador(data[0]);
    }
    fetchData();
  }, []);

  return (
    <div className="profile-content1">
      <h2>Perfil Administrador</h2>
      <div className="details-content1">
        <div className="profile-info1">
          <div className="perfil-detalles1">
            <div className="data1">
              <LabelProfile strong="Nombre" text={`Nombre: ${trabajador.nombreTrabajadores}`} /> <br />
              <LabelProfile strong="Apellido Paterno" text={`Apellido paterno: ${trabajador.apellidoPaterno}`} /><br />
              <LabelProfile strong="Apellido Materno" text={`Apellido materno: ${trabajador.apellidoMaterno}`} /><br />
              <LabelProfile strong="Telefono" text={`Numero telefonico: ${trabajador.telefonoTrabajador}`} /><br />
              <LabelProfile strong="Ocupación" text="Ocupacion: Trabajador" /><br />
              <LabelProfile strong="Id trabajador" text={`ID Trabajador: ${trabajador.idTrabajador}`} /><br />
              <LabelProfile strong="Id Usuario" text={`ID Usuario: ${trabajador.idUsuario}`} /><br />
            </div>
            <div className="profile-picture1">
              <ImageAtom
                src="src/assets/img/user.webp"
                alt="Foto de perfil"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInfo;
