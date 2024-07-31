import React, { useState } from 'react';
import { datosEconomicos } from '../services/datosUsuario';
import '../Styles/organism/RegistroEconomico.css';
import Swal from 'sweetalert2';
import Navbar from '../Molecule/Navbar';
import Footer from '../Molecule/Footer';

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
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no autenticado'
      });
      return;
    }

    try {
      const response = await datosEconomicos(formData);
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Datos registrados correctamente'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Error al registrar los datos'
      });
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="form-group">
        <div className="form-field">
          <label>
            Ocupación:
            <input
              type="text"
              name="ocupacion"
              value={formData.ocupacion}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Ingresos Mensuales:
            <input
              type="number"
              name="ingresosMensuales"
              value={formData.ingresosMensuales}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Gastos Mensuales:
            <input
              type="number"
              name="gastosMensuales"
              value={formData.gastosMensuales}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Apoyos Externos:
            <select
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
        <button type="submit" className="boton2">Registrar</button>
      </form>
      <Footer />
    </>
  );
};

export default RegistroEconomico;
