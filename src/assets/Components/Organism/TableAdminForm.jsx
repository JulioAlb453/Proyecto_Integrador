import React from 'react';

const TableAdminForm = ({ formMode, formData, fields, onInputChange, onSubmit, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{formMode === 'add' ? 'Agregar Evento' : 'Editar Evento'}</h2>
        <form onSubmit={onSubmit}>
          {fields.map((field) => (
            <div key={field.name} className="form-group">
              <label htmlFor={field.name}>{field.label}</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name] || ''}
                onChange={onInputChange}
                required={field.required}
              />
            </div>
          ))}
          <button type="submit">{formMode === 'add' ? 'Agregar' : 'Actualizar'}</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default TableAdminForm;
