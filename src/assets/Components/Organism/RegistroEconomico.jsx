// src/components/organisms/RegistroEconomico.js
import React, { useState } from 'react';
import FielGroup from '../Molecule/FieldGroup'
import '../Styles/organism/RegistroEconomico.css';

const RegistroEconomico = () => {
  const [values, setValues] = useState({
    ocupacion: '',
    ingresosMensuales: '',
    gastosMensuales: '',
    apoyosExternos: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (id, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('https://your-api-endpoint.com/registro-economico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSuccess('Datos registrados correctamente');
      setValues({ ocupacion: '', ingresosMensuales: '', gastosMensuales: '', apoyosExternos: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="cofre-left">
            <FielGroup
              fields={[
                { id: 'ocupacion', label: 'Ocupación', required: true },
                { id: 'ingresosMensuales', label: 'Ingresos mensuales', required: true }
              ]}
              values={values}
              onChange={handleChange}
            />
          </div>
          <div className="cofre-right">
            <FielGroup
              fields={[
                { id: 'gastosMensuales', label: 'Gastos mensuales' },
                { id: 'apoyosExternos', label: 'Apoyos externos' }
              ]}
              values={values}
              onChange={handleChange}
            />
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default RegistroEconomico;
