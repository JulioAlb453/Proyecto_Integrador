import React from 'react';


const ButtonSubmit = ({ text, type, disabled }) => (
  <button className="submit-button" type={type} disabled={disabled}>
    {text}
  </button>
);

export default ButtonSubmit;
