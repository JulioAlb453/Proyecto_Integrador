  import React, { useState } from 'react';
  import { datosVivienda } from '../services/datosUsuario'; // Asegúrate de que esta función exista en el archivo
  import '../Styles/organism/RegistroVivienda.css'
  const RegistroVivienda = () => {
    const [values, setValues] = useState({
      calle: '',
      colonia: '',
      numeroExterior: '',
      numInterior: '',
      codigoPostal: '',
      numHabitaciones: '',
      estatusVivienda: '',
      tipoVivienda: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues(prevValues => ({
        ...prevValues,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Usuario no autenticado');
        setLoading(false);
        return;
      }

      try {
        const response = await datosVivienda(values);
        alert('Datos registrados correctamente');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="form-group">
      <h1>Registro de vivienda</h1>
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
            <input
              type="text"
              name="colonia"
              value={values.colonia}
              onChange={handleChange}
              required
            />
          </label>
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
            <input
              type="text"
              name="estatusVivienda"
              value={values.estatusVivienda}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Tipo de vivienda:
            <input
              type="text"
              name="tipoVivienda"
              value={values.tipoVivienda}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    );
  };

  export default RegistroVivienda;