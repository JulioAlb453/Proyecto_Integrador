import React from "react";

function InputWithIcon({ type, placeholder, icon, required, onChange }) {
  return (
    <div className="input-box">
      <input type={type} placeholder={placeholder} required={required} onChange={onChange} />
      {icon && <span className="icon">{icon}</span>}
    </div>
  );
}

export default InputWithIcon;
