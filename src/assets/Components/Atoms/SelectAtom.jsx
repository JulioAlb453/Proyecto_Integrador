import React from "react";
import '../Styles/Atoms/SelectAtom.css'
const Select = ({ value, onChange, options, required }) => (
  <select value={value} onChange={onChange} required={required}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
