
import React from 'react';
import Label from '../Atoms/Label';
import Input from '../Atoms/InputBox'

function FieldGroup({ fields }) {
  return (
    <div className="field-group">
      {fields.map((field, index) => (
        <div key={index} className="field">
          <Label htmlFor={field.id} text={field.label} />
          <Input type="text" id={field.id} />
        </div>
      ))}
    </div>
  );
}

export default FieldGroup;
