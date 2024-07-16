import React from 'react';

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
