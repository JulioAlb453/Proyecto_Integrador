// src/Atoms/Button.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Atoms/ButtonLink.css'

function ButtonLink({ text, to, link }) {
  return (
    <Link to={to || link} className="button-link">
      <button className="button">{text}</button>
    </Link>
  );
}

export default ButtonLink;
