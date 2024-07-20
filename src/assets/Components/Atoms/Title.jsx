// src/components/Atoms/TitleAtom.js
import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Atoms/Title.css'; // Asegúrate de que la ruta sea correcta

const TitleAtom = ({ text, className = '' }) => {
  return <h2 className={`title ${className}`}>{text}</h2>;
};

TitleAtom.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TitleAtom;
