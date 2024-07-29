import React, { useState } from 'react';
import Button from '../Atoms/Button';
import Swal from 'sweetalert2';
import { deleteDenuncia, getAllDenuncias } from '../services/denuncia';

const EliminarDenuncia = ({ setDenuncias, setError }) => {
  const [idDenuncia, setIdDenuncia] = useState("");

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Usuario no autenticado');
      return;
    }

    if (!idDenuncia) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingrese un ID de denuncia',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }

    try {
      await deleteDenuncia(idDenuncia, token);
      Swal.fire({
        title: 'Éxito',
        text: 'Denuncia eliminada correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      // Refetch denuncias after deleting one
      const data = await getAllDenuncias();
      setDenuncias(data);
      setIdDenuncia(""); // Clear the input after deletion
    } catch (err) {
      console.log("Error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="delete-section">
      <input
        type="number"
        placeholder="Ingresar ID de Denuncia"
        value={idDenuncia}
        onChange={(e) => setIdDenuncia(e.target.value)}
      />
      <Button
        text="Eliminar denuncia por ID"
        onClick={handleDelete}
      />
    </div>
  );
};

export default EliminarDenuncia;
