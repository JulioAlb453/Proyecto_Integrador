import React, { useState } from 'react';
import { datosVivienda } from '../services/datosUsuario'; // Asegúrate de que esta función exista en el archivo
import '../Styles/organism/datosVivienda.css';
import Navbar from '../Molecule/Navbar';
import Footer from '../Molecule/Footer';
import Swal from 'sweetalert2';

const RegistroVivienda = () => {
  const [values, setValues] = useState({
    calle: '',
    colonia: '',
    otraColonia: '',
    numeroExterior: '',
    numInterior: '',
    codigoPostal: '',
    numHabitaciones: '',
    estatusVivienda: '',
    tipoVivienda: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coloniaOtra, setColoniaOtra] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));

    if (name === 'colonia' && value === 'Otra') {
      setColoniaOtra(true);
    } else if (name === 'colonia') {
      setColoniaOtra(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('token');
    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no autenticado'
      });
      setLoading(false);
      return;
    }

    try {
      const response = await datosVivienda(values);
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Datos registrados correctamente'
      });
    } catch (err) {
      setError(err.message);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.message || 'Error al registrar los datos'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="form-group">
        <div className="cajita1">
          <label>
            Calle:
            <input
              type="text"
              name="calle"
              value={values.calle}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Colonia:
            <select
              name="colonia"
              value={values.colonia}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una colonia</option>
              <option value="Centro">Centro</option>
              <option value="San Roque">San Roque</option>
              <option value="Moctezuma">Moctezuma</option>
              <option value="Las Águilas">Las Águilas</option>
              <option value="Los Laureles">Los Laureles</option>
              <option value="Terán">Terán</option>
              <option value="Chapultepec">Chapultepec</option>
              <option value="Otra">Otra</option>
            </select>
          </label>
          {coloniaOtra && (
            <label>
              Otra colonia:
              <input
                type="text"
                name="otraColonia"
                value={values.otraColonia}
                onChange={handleChange}
                required
              />
            </label>
          )}
          <br />
          <label>
            Número exterior:
            <input
              type="number"
              name="numeroExterior"
              value={values.numeroExterior}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Número interior:
            <input
              type="number"
              name="numInterior"
              value={values.numInterior}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="cajita2">
          <label>
            Código postal:
            <input
              type="number"
              name="codigoPostal"
              value={values.codigoPostal}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Número de habitaciones:
            <input
              type="number"
              name="numHabitaciones"
              value={values.numHabitaciones}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Estatus de vivienda:
            <select
              name="estatusVivienda"
              value={values.estatusVivienda}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un estatus</option>
              <option value="Propia">Propia</option>
              <option value="Renta">Renta</option>
              <option value="Hipoteca">Hipoteca</option>
              <option value="Prestada">Prestada</option>
            </select>
          </label>
          <br />
          <label>
            Tipo de vivienda:
            <select
              name="tipoVivienda"
              value={values.tipoVivienda}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un tipo</option>
              <option value="Casa habitación">Casa habitación</option>
              <option value="Departamento">Departamento</option>
              <option value="Estudio">Estudio</option>
              <option value="Vivienda compartida">Vivienda compartida</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="boton2"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <Footer />
    </>
  );
};

export default RegistroVivienda;
