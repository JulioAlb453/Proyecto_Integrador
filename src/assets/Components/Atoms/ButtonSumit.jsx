// src/components/Atoms/ButtonSubmit.js
import React from 'react';

function ButtonSubmit({ text, type = 'button', onClick, disabled }) {
  return (
    <button
      type={type}
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default ButtonSubmit;
