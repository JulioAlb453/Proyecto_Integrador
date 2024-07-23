import React from 'react';
import SearchInput from '../Atoms/SearchInput';
import Button from '../Atoms/Button';

const SearchBarTable = ({ searchQuery, onSearch, onAdd }) => (
  <div className="search-bar">
    <Button onClick={onAdd}>Agregar</Button>
    <SearchInput
      type="text"
      placeholder="Buscar..."
      value={searchQuery}
      onChange={onSearch}
    />
  </div>
);

export default SearchBarTable;
