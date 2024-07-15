import React from 'react';
import Checkbox from './CheckBox';
const CheckboxGroup = ({ columns, selectedColumns, onCheckboxChange }) => (
  <div className="checkbox-container">
    {Object.keys(columns).map((column) => (
      <Checkbox
        key={column}
        id={column}
        label={columns[column]}
        checked={selectedColumns[column]}
        onChange={() => onCheckboxChange(column)}
      />
    ))}
  </div>
);

export default CheckboxGroup;
