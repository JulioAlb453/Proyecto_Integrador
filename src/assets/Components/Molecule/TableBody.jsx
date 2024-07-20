import React from "react";

const TableBody = ({ data, columns, selectedColumns, onEdit, onDelete }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {Object.keys(columns).map((key) =>
            selectedColumns[key] ? <td key={key}>{item[key]}</td> : null
          )}
          <td>
            <button onClick={() => onEdit(item)}>Editar</button>
            <button onClick={() => onDelete(item.id)}>Eliminar</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
