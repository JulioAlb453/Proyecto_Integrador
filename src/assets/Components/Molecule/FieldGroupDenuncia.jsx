import React from 'react';
import Texarea from '../Atoms/Textarea'
import SelectTable from '../Atoms/SelectTable'

const FieldGroup = ({ fields, values, onChange }) => (
  <div className="field-group">
    {fields.map((field, index) => (
      <div key={index} className="field">
        <label htmlFor={field.id}>{field.label}</label>
        {field.type === 'textarea' ? (
          <Texarea
            name={field.id}
            value={values[field.id] || ''}
            onChange={(e) => onChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
          />
        ) : field.type === 'select' ? (
          <SelectTable
            id={field.id}
            value={values[field.id] || ''}
            onChange={(e) => onChange(field.id, e.target.value)}
            options={field.options}
            required={field.required}
          />
        ) : (
          <input
            type={field.type || 'text'}
            id={field.id}
            value={values[field.id] || ''}
            onChange={(e) => onChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
          />
        )}
      </div>
    ))}
  </div>
);

export default FieldGroup;
