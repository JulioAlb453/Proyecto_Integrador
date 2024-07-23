import React, { useState, useEffect } from 'react';
import FormActions from '../Molecule/FormActions';
import FormHeader from '../Molecule/FormHeader'
import FormField from '../Molecule/FormField'

const Form = ({ mode, initialData, columns, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(initialData || {});

  // Actualiza el estado formData cuando initialData cambie
  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Renderiza el formulario
  return (
    <form onSubmit={handleSubmit}>
      {/* Encabezado del formulario */}
      <FormHeader title={mode === 'add' ? 'Agregar Registro' : 'Editar Registro'} />

      {/* Campos del formulario */}
      {Object.keys(columns).map((key) => (
        <FormField
          key={key}
          id={key}
          label={columns[key]}
          value={formData[key] || ''}
          onChange={handleChange}
          required
        />
      ))}

      {/* Botones de acción del formulario */}
      <FormActions
        onSubmit={handleSubmit}
        onCancel={onCancel}
        submitLabel={mode === 'add' ? 'Agregar' : 'Actualizar'}
        cancelLabel="Cancelar"
      />
    </form>
  );
};

export default Form;
