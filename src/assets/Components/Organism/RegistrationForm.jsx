import React, { useState } from 'react';
import { datosPersonales } from '../services/datosUsuario';

const RegistrarPersonal = () => {
  const [formData, setFormData] = useState({
    edad: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    numHijos: '',
    estadoCivil: '',
    fechaNacimiento: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Usuario no autenticado');
      return;
    }

    try {
      const response = await datosPersonales(formData);
      alert('Datos registrados correctamente');
    } catch (error) {
      alert(error.message || 'Error al registrar los datos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Edad:
        <input type="number" name="edad" value={formData.edad} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Apellido Paterno:
        <input type="text" name="apellidoPaterno" value={formData.apellidoPaterno} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Apellido Materno:
        <input type="text" name="apellidoMaterno" value={formData.apellidoMaterno} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Teléfono:
        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Número de Hijos:
        <input type="number" name="numHijos" value={formData.numHijos} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Estado Civil:
        <input type="text" name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Fecha de Nacimiento:
        <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistrarPersonal;