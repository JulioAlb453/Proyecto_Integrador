import React from 'react';

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
