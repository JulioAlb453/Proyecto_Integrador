import React, { useState, useEffect } from 'react';
import { datosPersonales } from '../services/datosUsuario';
import '../Styles/organism/datosPersonales.css'; // Usa el mismo CSS que RegistroEconomico
import Swal from 'sweetalert2';
import Navbar from '../Molecule/Navbar';
import Footer from '../Molecule/Footer';

const RegistrationForm = () => {
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

  const [estadoCivilOptions, setEstadoCivilOptions] = useState([
    'Soltero/a',
    'Casado/a',
    'Divorciado/a',
    'Viudo/a',
    'Unión libre'
  ]);

  useEffect(() => {
    if (formData.edad) {
      const currentYear = new Date().getFullYear();
      const birthYear = currentYear - parseInt(formData.edad, 10);
      const birthDate = new Date(birthYear, 0, 1).toISOString().split('T')[0]; // Asume el 1 de enero para la fecha
      setFormData((prevData) => ({
        ...prevData,
        fechaNacimiento: birthDate
      }));
    }
  }, [formData.edad]);

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
      const response = await datosPersonales(formData);
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
      <form onSubmit={handleSubmit} className="registro-form1">
        <h2>Registrar Datos Personales</h2>
        <div className="form-field">
          <label>
            Edad:
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Apellido Paterno:
            <input
              type="text"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Apellido Materno:
            <input
              type="text"
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Teléfono:
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Número de Hijos:
            <input
              type="number"
              name="numHijos"
              value={formData.numHijos}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Estado Civil:
            <select
              name="estadoCivil"
              value={formData.estadoCivil}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              {estadoCivilOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-field">
          <label>
            Fecha de Nacimiento:
            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" className="boton2">Enviar</button>
      </form>
      <Footer />
    </>
  );
};

export default RegistrationForm;
