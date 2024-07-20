// src/components/templates/RegistrationTemplate.js
import React, { useState } from 'react';
import TitleAtom from '../Atoms/Title';
import RegistrationForm from '../Organism/RegistrationForm';

function RegistrationTemplate() {
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
    <div className="content">
      <TitleAtom text="REGISTRO DE USUARIA" />
      <RegistrationForm values={formValues} onChange={handleChange} />
    </div>
  );
}

export default RegistrationTemplate;
