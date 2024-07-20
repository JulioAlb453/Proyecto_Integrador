
import React from 'react';
import Label from '../Atoms/Label';
import InputAdminTable from '../Atoms/InputAdminTable';

function FieldGroup({ fields }) {
  return (
    <div className="field-group">
      {fields.map((field, index) => (
        <div key={index} className="field">
          <Label htmlFor={field.id} text={field.label} />
          <InputAdminTable type="text" id={field.id} />
        </div>
      ))}
    </div>
  );
}

export default FieldGroup;
