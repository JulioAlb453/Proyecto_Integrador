// src/Atoms/FormLabel.js
import React from 'react';

const FormLabel = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor}>
    {children}
  </label>
);

export default FormLabel;
