import React from 'react';
// import '../Styles/Atoms/Input.css';

//Se usa en: datos de usuario, para el registro de denuncia
const InputData = ({ name, value, onChange, type = 'text', placeholder = '', required = false }) => (
  <input
    className="input-field"
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
  />
);

export default InputData;
