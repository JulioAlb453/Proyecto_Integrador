import React from 'react';

import TableCellAtom from '../Atoms/TableCellAtom';
import Button from '../Atoms/Button'

const TableRowMolecule = ({ data, onEdit, onDelete, editClassName, deleteClassName }) => (
  <tr className="table-row">
    {data.map((item, index) => (
      <TableCellAtom key={index} content={item} />
    ))}
    <td>
      <Button onClick={onEdit} label="Edit" className={editClassName} />
      <Button onClick={onDelete} label="Delete" className={deleteClassName} />
    </td>
  </tr>
);

export default TableRowMolecule;
