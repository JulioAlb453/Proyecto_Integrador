// src/components/Organisms/RegistroDenuncia.js
import React, { useState } from 'react';
import FieldGroup from '../Molecule/FieldGroup';
import ButtonSubmit from '../Atoms/ButtonSumit';
import Message from '../Atoms/Message';
import '../Styles/organism/RegistroDenuncia.css'

const RegistroDenuncia = () => {
  const [values, setValues] = useState({
    nombreDenunciante: '',
    fechaDenuncia: '',
    descripcion: '',
    evidencias: ''
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
      const response = await fetch('https://your-api-endpoint.com/registro-denuncia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSuccess('Denuncia registrada correctamente');
      setValues({ nombreDenunciante: '', fechaDenuncia: '', descripcion: '', evidencias: '' });
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
            <FieldGroup
              fields={[
                { id: 'nombreDenunciante', label: 'Nombre del denunciante', required: true },
                { id: 'fechaDenuncia', label: 'Fecha de denuncia', required: true }
              ]}
              values={values}
              onChange={handleChange}
            />
          </div>
          <div className="cofre-right">
            <FieldGroup
              fields={[
                { id: 'descripcion', label: 'Descripción', required: true },
                { id: 'evidencias', label: 'Evidencias' }
              ]}
              values={values}
              onChange={handleChange}
            />
          </div>
        </div>
        {error && <Message text={error} type="error" />}
        {success && <Message text={success} type="success" />}
        <ButtonSubmit text={loading ? 'Enviando...' : 'Enviar'} type="submit" disabled={loading} />
      </form>
    </div>
  );
};

export default RegistroDenuncia;
