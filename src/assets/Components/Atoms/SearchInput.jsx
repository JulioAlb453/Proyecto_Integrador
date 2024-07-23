import React from "react";
import "../Styles/Atoms/SearchInput.css";

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Buscar..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
