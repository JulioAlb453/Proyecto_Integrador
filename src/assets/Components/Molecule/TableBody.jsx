import React from 'react';
import TableDataCell from '../Atoms/TableData';

// Su propósito es renderizar las filas y celdas de datos en la tabla
const TableBody = ({ data, columns, selectedColumns, onEdit, onDelete }) => (
  <tbody>
    {data.map((item) => (
      <tr key={item.id}>
        {Object.keys(columns).map((key) =>
          selectedColumns[key] ? <TableDataCell key={key}>{item[key]}</TableDataCell> : null
        )}
        <TableDataCell>
          <button onClick={() => onEdit(item)}>Editar</button>
          <button onClick={() => onDelete(item.id)}>Eliminar</button>
        </TableDataCell>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
