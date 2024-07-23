import React, { useState } from 'react';
import SearchInput from '../Atoms/SearchInput';
import Button from '../Atoms/Button';

const FormTable = ({ mode, initialData, columns, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(columns).map((key) => (
        <div key={key}>
          <label>
            {columns[key]}:
            <SearchInput
              type="text"
              name={key}
              value={formData[key] || ''}
              onChange={handleChange}
            />
          </label>
        </div>
      ))}
      <Button type="submit">{mode === 'add' ? 'Agregar' : 'Actualizar'} Noticia</Button>
      <Button type="button" onClick={onCancel}>Cancelar</Button>
    </form>
  );
};

export default FormTable;
