import React from 'react';

const SelectTable = ({ id, value, onChange, options, required }) => (
  <select id={id} value={value} onChange={onChange} required={required}>
    {options.map((option, index) => (
      <option key={index} value={option.value || option}>
        {option.label || option}
      </option>
    ))}
  </select>
);

export default SelectTable;
