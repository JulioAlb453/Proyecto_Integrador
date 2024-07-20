import React from "react";
import '../Styles/Atoms/Select.css'
const Select = ({ id, value, onChange, options }) => (
  <div className="table-select">
    <label htmlFor={id}>Seleccionar tipo de tabla:</label>
    <select id={id} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
