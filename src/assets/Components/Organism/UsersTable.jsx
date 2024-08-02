// src/Organism/Tables/UsersTable.js
import React from 'react';
import TableHeader from '../Molecule/TableHeader';
import TableBody from '../Templates/TableBody';

const UsersTable = ({ data, columns, selectedColumns, onEdit, onDelete }) => (
  <table>
    <TableHeader columns={columns} selectedColumns={selectedColumns} />
    <TableBody
      data={data}
      columns={columns}
      selectedColumns={selectedColumns}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  </table>
);

export default UsersTable;
