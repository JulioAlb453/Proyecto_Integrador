import React from 'react';
import Button from '../Atoms/Button';

//se encarga de renderizar los botones de acción en un formulario, 
//como el botón para enviar el formulario y el botón para cancelar. 
const FormActions = ({ onSubmit, onCancel, submitLabel, cancelLabel }) => (
  <div className="form-actions">
    <Button type="submit" onClick={onSubmit}>
      {submitLabel}
    </Button>
    <Button type="button" onClick={onCancel}>
      {cancelLabel}
    </Button>
  </div>
);

export default FormActions;
