import React from 'react';
import ButtonLink from '../Atoms/ButtonLink';
import '../Styles/organism/ActionsButtonsProfile.css'
function ActionButtons() {
  return (
    <div className="action-buttons">
      <div className="modificar-personal">
        <h1>¿DESEA EDITAR ALGUN DATO PERSONAL?</h1>
        <ButtonLink text="Editar datos personales" to="/RegistroDatosUsuaria" />
      </div>
      <div className="asesorias">
        <h1>ASESORATES CON NUESTROS EXPERTOS</h1>
        <ButtonLink text="CITA" to="/Servicios" />
      </div>
      <div className="contactos">
        <h1>¿USTED HA SIDO AGREDIDA?</h1>
        <ButtonLink text="DENUNCIAS" to="/RegistroDenuncia" />
      </div>
      <div className='RegistroDatosEconomicos'>
        <h1>Registre datos Economicos</h1>
        <ButtonLink text="Datos Economicos" to="/RegistroEconomico"/>
      </div>
      <div className='RegistroDatosVivienda'>
        <h1>Registre datos de vivienda</h1>
        <ButtonLink text="Datos de vivienda" to ="/RegistroVivienda"/>
      </div>
    </div>
  );
}

export default ActionButtons;