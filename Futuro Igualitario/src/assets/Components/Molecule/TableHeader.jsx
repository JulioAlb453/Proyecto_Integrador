import React from 'react';

const TableHeader = ({ columns, selectedColumns }) => (
  <thead>
    <tr>
      {Object.keys(columns).map(
        (column) => selectedColumns[column] && <th key={column}>{columns[column]}</th>
      )}
    </tr>
  </thead>
);

export default TableHeader;
