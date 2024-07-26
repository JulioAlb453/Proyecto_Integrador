import React, { useState } from 'react';
import { datosEconomicos } from '../services/datosUsuario';

const RegistroEconomico = () => {
  const [formData, setFormData] = useState({
    ocupacion: '',
    ingresosMensuales: '',
    gastosMensuales: '',
    apoyosExternos: ''
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
      const response = await datosEconomicos(formData);
      alert('Datos registrados correctamente');
    } catch (error) {
      alert(error.message || 'Error al registrar los datos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ocupación:
        <input type="text" name="ocupacion" value={formData.ocupacion} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Ingresos Mensuales:
        <input type="number" name="ingresosMensuales" value={formData.ingresosMensuales} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Gastos Mensuales:
        <input type="number" name="gastosMensuales" value={formData.gastosMensuales} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Apoyos Externos:
        <select name="apoyosExternos" value={formData.apoyosExternos} onChange={handleChange} required>
          <option value="">Selecciona una opción</option>
          <option value="ninguno">Ninguno</option>
          <option value="Apoyo al progreso del gobierno federal">Prospera</option>
          <option value="Apoyo a la manutencion para Madres solteras">Apoyo a madres solteras del estado</option>
        </select>
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistroEconomico;