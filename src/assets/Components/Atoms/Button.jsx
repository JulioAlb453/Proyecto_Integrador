// src/Atoms/Button.js
import React from 'react';
import '../Styles/Atoms/Button.css'
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

export default Button;
