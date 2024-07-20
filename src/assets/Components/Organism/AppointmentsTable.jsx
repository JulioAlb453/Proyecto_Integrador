import React, { useState } from 'react';
import TableHeader from '../Atoms/TableHeader';
import TableBody from '../Molecule/TableBody';
import Form from '../Molecule/Form';

const AppointmentsTable = ({ data, onDataChange }) => {
  const [formMode, setFormMode] = useState(null);
  const [formData, setFormData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const columns = {
    date: 'Fecha',
    time: 'Hora',
    with: 'Con',
  };

  const handleAdd = () => {
    setFormMode('add');
    setFormData(null);
  };

  const handleEdit = (item) => {
    setFormMode('edit');
    setFormData({ ...item });
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      const updatedData = data.filter((item) => item.id !== id);
      onDataChange(updatedData);
    }
  };

  const handleFormSubmit = (formData) => {
    if (formMode === 'add') {
      const newItem = { ...formData, id: Date.now() };
      onDataChange([...data, newItem]);
    } else if (formMode === 'edit') {
      const updatedData = data.map((item) =>
        item.id === formData.id ? formData : item
      );
      onDataChange(updatedData);
    }
    setFormMode(null);
    setFormData(null);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <div className="table-actions">
        <button onClick={handleAdd}>Agregar</button>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <table>
        <TableHeader columns={columns} selectedColumns={columns} />
        <TableBody
          data={filteredData}
          columns={columns}
          selectedColumns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </table>
      {formMode && (
        <Form
          mode={formMode}
          initialData={formData}
          columns={columns}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setFormMode(null);
            setFormData(null);
          }}
        />
      )}
    </div>
  );
};

export default AppointmentsTable;
