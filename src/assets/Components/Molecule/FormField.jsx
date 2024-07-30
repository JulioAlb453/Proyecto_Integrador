import React from 'react';

const FormField = ({ id, value, onChange, label }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default FormField;
