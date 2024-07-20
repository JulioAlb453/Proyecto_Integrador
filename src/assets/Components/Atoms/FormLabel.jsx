import React from 'react';
import '../Styles/Atoms/FormLabel.css'
const FormLabel = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor}>
    {children}
  </label>
);

export default FormLabel;
