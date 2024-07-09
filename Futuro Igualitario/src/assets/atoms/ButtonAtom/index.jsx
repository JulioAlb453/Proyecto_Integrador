import React from "react";

function ButtonAtom({ type, onClick, children }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonAtom;
