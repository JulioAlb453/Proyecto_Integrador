import React from "react";

function CheckboxAtom({ label, onChange }) {
  return (
    <label>
      <input type="checkbox" onChange={onChange} />
      {label}
    </label>
  );
}

export default CheckboxAtom;
