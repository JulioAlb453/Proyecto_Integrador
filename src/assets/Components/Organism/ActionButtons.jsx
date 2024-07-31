import React from 'react';
import ButtonLink from '../Atoms/ButtonLink';
import '../Styles/organism/ActionsButtonsProfile.css'
function ActionButtons() {
  return (
    <div className="action-buttons">
      <div className="modificar-personal">
        <h1>REGISTRE SUS DATOS<br /> PERSONALES</h1>
        <ButtonLink text="Datos personales" to="/RegistroDatosUsuaria" />
      </div>
      <div className='RegistroDatosEconomicos'>
        <h1>REGISTRE SUS DATOS ECONOMICOS</h1>
        <ButtonLink text="Datos Economicos" to="/RegistroEconomico"/>
      </div>
      <div className='RegistroDatosVivienda'>
        <h1>REGISTRE SUS DATOS DE VIVIENDA</h1>
        <ButtonLink text="Datos de vivienda" to ="/RegistroVivienda"/>
      </div>
      <div className="asesorias">
        <h1>ASESORATES CON NUESTROS EXPERTOS</h1>
        <ButtonLink text="CITA" to="/Servicios" />
      </div>
      <div className="contactos">
        <h1>¿USTED HA SUFRIDO UNA AGRESION?</h1>
        <ButtonLink text="DENUNCIAS" to="/RegistroDenuncia" />
      </div>
      
      
    </div>
  );
}

export default ActionButtons;