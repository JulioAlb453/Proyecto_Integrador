import React, { useState } from 'react';
import { datosEconomicos } from '../services/datosUsuario';
import '../Styles/organism/RegistroEconomico.css'; // Importa el archivo CSS

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
    <div className="registro-economico-container">
      <h1>Registro Económico</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ocupacion">
            Ocupación:
            <input 
              type="text" 
              id="ocupacion" 
              name="ocupacion" 
              value={formData.ocupacion} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="ingresosMensuales">
            Ingresos Mensuales:
            <input 
              type="number" 
              id="ingresosMensuales" 
              name="ingresosMensuales" 
              value={formData.ingresosMensuales} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="gastosMensuales">
            Gastos Mensuales:
            <input 
              type="number" 
              id="gastosMensuales" 
              name="gastosMensuales" 
              value={formData.gastosMensuales} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="apoyosExternos">
            Apoyos Externos:
            <select 
              id="apoyosExternos" 
              name="apoyosExternos" 
              value={formData.apoyosExternos} 
              onChange={handleChange} 
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="ninguno">Ninguno</option>
              <option value="Apoyo al progreso del gobierno federal">Prospera</option>
              <option value="Apoyo a la manutencion para Madres solteras">Apoyo a madres solteras del estado</option>
            </select>
          </label>
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroEconomico;
