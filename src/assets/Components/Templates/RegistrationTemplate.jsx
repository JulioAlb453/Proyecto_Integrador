// src/components/templates/RegistrationTemplate.js
import React, { useState } from 'react';
import TitleAtom from '../Atoms/Title';
import RegistrationForm from '../Organism/RegistrationForm';
import '../Styles/templates/RegistrationPage.css'; // Importa el archivo CSS

const RegistrationTemplate = () => {
  const [formValues, setFormValues] = useState({
    apellidoP: '',
    nombre: '',
    estadoCivil: '',
    apellidoM: '',
    direccion: '',
    ocupacion: ''
  });

  const handleChange = (id, value) => {
    setFormValues({
      ...formValues,
      [id]: value
    });
  };

  return (
    <div className="registration-template-container">
      <TitleAtom text="Registro de Usuaria" />
      <div className="form-container">
        <RegistrationForm values={formValues} onChange={handleChange} />
      </div>
    </div>
  );
};

export default RegistrationTemplate;
