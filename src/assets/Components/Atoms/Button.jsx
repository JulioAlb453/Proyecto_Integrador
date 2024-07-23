import React from 'react';
import '../Styles/Atoms/Button.css'

//Funcionalidad del boton
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

export default Button;
