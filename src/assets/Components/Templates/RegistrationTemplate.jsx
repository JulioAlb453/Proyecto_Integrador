// src/components/templates/RegistrationTemplate.js
import React, { useState } from 'react';
import RegistrationForm from '../Organism/RegistrationForm';
import Swal from 'sweetalert2';

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
    <>
    <div className="content">
      <RegistrationForm values={formValues} onChange={handleChange} />
    </div>
    </>
  );
}

export default RegistrationTemplate;
