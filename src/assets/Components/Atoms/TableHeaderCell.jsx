import React from 'react';
import TableHeaderCell from '../Atoms/TableHeaderCell';

//Su propósito es agrupar y organizar las celdas de encabezado (<th>) de la tabla
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
