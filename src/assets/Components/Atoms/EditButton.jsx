import React from "react";

export default function EditButton(){
    return (
        <button type="submit">
          {mode === 'add' ? 'Agregar' : 'Actualizar'}
        </button>
      );
}

