import React from 'react';
// import '../Styles/Atoms/LabelAtom.css';  // Asegúrate de tener estilos

//Se usa en: Denuncias
const LabelAtom = ({ htmlFor, text }) => (
  <label htmlFor={htmlFor} className="label">
    {text}
  </label>
);

export default LabelAtom;
