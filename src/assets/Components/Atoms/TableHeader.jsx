import React from 'react';
import '../Styles/Atoms/TableHeader.css'
const TableHeader = ({ columns, selectedColumns }) => {
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((key) => (
          selectedColumns[key] ? <th key={key}>{columns[key]}</th> : null
        ))}
        <th>Acciones</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
