import React from 'react';

const TableBody = ({ data, columns, selectedColumns }) => (
  <tbody>
    {data.map((item) => (
      <tr key={item.id}>
        {Object.keys(columns).map(
          (column) => selectedColumns[column] && <td key={column}>{item[column]}</td>
        )}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
