// src/components/organisms/RegistroVivienda.js
import React, { useState } from 'react';
import FieldGroup from '../Molecule/FieldGroup';
import '../Styles/organism/RegistroVivienda.css'
function RegistroVivienda({ onSubmit }) {
  const [values, setValues] = useState({
    calle: '',
    colonia: '',
    numeroExterior: '',
    numeroInterior: '',
    codigoPostal: '',
    numHabitaciones: '',
    estatusVivienda: '',
    tipoVivienda: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (id, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/viviendas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      const data = await response.json();
      console.log('Datos enviados exitosamente:', data);
      // Maneja el éxito, tal vez redirigiendo o mostrando un mensaje
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-group">
      <div className="cajita1">
        <FieldGroup 
          fields={[
            { id: 'calle', label: 'Calle' },
            { id: 'colonia', label: 'Colonia' },
            { id: 'numeroExterior', label: 'Número exterior' },
            { id: 'numeroInterior', label: 'Número interior' }
          ]}
          values={values}
          onChange={handleChange}
        />
      </div>
      <div className="cajita2">
        <FieldGroup 
          fields={[
            { id: 'codigoPostal', label: 'Código postal' },
            { id: 'numHabitaciones', label: 'Num de habitaciones' },
            { id: 'estatusVivienda', label: 'Estatus vivienda' },
            { id: 'tipoVivienda', label: 'Tipo vivienda' }
          ]}
          values={values}
          onChange={handleChange}
        />
      </div>
      <button 
        className="submit-button" 
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default RegistroVivienda;
