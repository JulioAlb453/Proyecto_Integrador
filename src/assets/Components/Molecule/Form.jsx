import React, { useState, useEffect } from 'react';

const Form = ({ mode, initialData, columns, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(initialData || {});

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{mode === 'add' ? 'Agregar' : 'Editar'} Registro</h3>
      {Object.keys(columns).map((key) => (
        <div key={key} className="form-group">
          <label htmlFor={key}>{columns[key]}</label>
          <input
            type="text"
            id={key}
            value={formData[key] || ''}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">{mode === 'add' ? 'Agregar' : 'Actualizar'}</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default Form;
