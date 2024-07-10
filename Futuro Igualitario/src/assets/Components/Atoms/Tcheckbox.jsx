import React, { useState } from 'react';

function Tcheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className='checkbox'>
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        Soy trabajador
      </label>

      {isChecked && (
        <div className='input-box'>
          <input type="text" id="trabajadorInfo" name="trabajadorInfo" placeholder='Id trabajador' required />
        </div>
      )}
    </div>
  );
};

export default Tcheckbox;