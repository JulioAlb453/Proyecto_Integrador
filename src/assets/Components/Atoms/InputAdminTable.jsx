import React from 'react';
import '../Styles/Atoms/InputAdminTable.css'
const InputAdminTable = ({ label, type = 'text', value, onChange }) => (
  <div>
    <label>
      {label}
      <input type={type} value={value} onChange={onChange} />
    </label>
  </div>
);

export default InputAdminTable;
