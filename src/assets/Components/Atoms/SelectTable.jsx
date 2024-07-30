import React from "react";

// Seleccion de tablas

import "../Styles/Atoms/SelectAtom.css";
const Select = ({ id, value, onChange, options }) => (
  <div className="table-select">
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
