import React from 'react';
import '../Styles/Atoms/Tcheckbox.css';

function Tcheckbox({ label, onChange, checked }) {
  return (
    <div className='checkbox-container'>
      <label className='checkbox-label'>
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          className='checkbox-input'
        />
        <span className='checkbox-text'>{label}</span>
      </label>
    </div>
  );
}

export default Tcheckbox;
