import React from 'react';
import '../Styles/Atoms/TextArea.css';

//Agrega la descripcion
const Textarea = ({ name, value, onChange, placeholder = '', required = false }) => (
  <textarea
    className="textarea-field"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
  />
);

export default Textarea;
