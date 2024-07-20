// src/Organism/TableActions.js
import React from 'react';
import Button from '../Atoms/Button';

const TableActions = ({ onAdd }) => (
  <div className="table-actions">
    <Button onClick={onAdd}>Agregar</Button>
  </div>
);

export default TableActions;
