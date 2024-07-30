import React from 'react';
import TableHeaderCell from '../Atoms/TableHeaderCell';

const TableHeader = ({ columns, selectedColumns }) => (
  <thead>
    <tr>
      {Object.keys(columns).map((key) =>
        selectedColumns[key] ? <TableHeaderCell key={key}>{columns[key]}</TableHeaderCell> : null
      )}
      <TableHeaderCell>Acciones</TableHeaderCell>
    </tr>
  </thead>
);

export default TableHeader;
