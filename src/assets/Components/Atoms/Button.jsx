import React from 'react';
import '../Styles/Atoms/ButtonSubmit.css'


const ButtonSubmit = ({ text, type, disabled }) => (
  <button className="submit-button" type={type} disabled={disabled}>
    {text}
  </button>
);

export default ButtonSubmit;
