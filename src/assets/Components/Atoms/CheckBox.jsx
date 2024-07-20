import React from 'react';
import '../Styles/Atoms/Checkbox.css'
const Checkbox = ({ id, label, checked, onChange }) => (
  <label className="checkbox-label">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

export default Checkbox;
