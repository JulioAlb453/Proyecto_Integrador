
import React from 'react';
import LabelProfile from '../Atoms/LabelProfile'
import InputAdminTable from '../Atoms/TextDisplay';

function FieldGroup({ fields }) {
  return (
    <div className="field-group">
      {fields.map((field, index) => (
        <div key={index} className="field">
          <LabelProfile htmlFor={field.id} text={field.label} />
          <InputAdminTable type="text" id={field.id} />
        </div>
      ))}
    </div>
  );
}

export default FieldGroup;
