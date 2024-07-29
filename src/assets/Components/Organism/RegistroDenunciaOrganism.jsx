import React, { useState, useEffect } from "react";
import FieldGroup from "../Molecule/FieldGroupDenuncia";
import Button from "../Atoms/Button";
import Message from "../Atoms/Message";
import Navbar from "../Molecule/Navbar";
import Footer from "../Molecule/Footer";
import "../Styles/organism/RegistroDenuncia.css"; 
import { addDenuncia, getAllDenuncias } from '../services/denuncia';
import Swal from 'sweetalert2';
import EliminarDenuncia from './EliminarDenuncia';

const RegistroDenunciaOrganism = () => {
  const [values, setValues] = useState({
    motivoDenuncia: "",
    gravedadCaso: "", 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [denuncias, setDenuncias] = useState([]);
  const [loadingDenuncias, setLoadingDenuncias] = useState(true);
  const [errorDenuncias, setErrorDenuncias] = useState(null);

  useEffect(() => {
    const fetchDenuncias = async () => {
      try {
        const data = await getAllDenuncias();
        setDenuncias(data);
      } catch (error) {
        setErrorDenuncias('Error al cargar las denuncias');
      } finally {
        setLoadingDenuncias(false);
      }
    };

    fetchDenuncias();
  }, []);

  const handleChange = (id, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Usuario no autenticado');
      setLoading(false);
      return;
    }
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    const formattedTime = currentDate.toTimeString().split(' ')[0]; // Formato HH:MM:SS

    const denunciaData = {
      ...values,
      fechaDenuncia: formattedDate,
      horaDenuncia: formattedTime,
      estatusDenuncia: 'inicializada',
    };
    try {
      await addDenuncia(denunciaData, token);
      Swal.fire({
        title: 'Éxito',
        text: 'Denuncia registrada correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
      }); 
      setValues({
        motivoDenuncia: "",
        gravedadCaso: "",
      });
      const data = await getAllDenuncias();
      setDenuncias(data);
    } catch (err) {
      console.log("Error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <div className="form-wrapper">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <div className="cofre-left">
                  <FieldGroup
                    fields={[]}
                    values={values}
                    onChange={handleChange}
                  />
                </div>
                <div className="cofre-right">
                  <h1 className="titulo">Denuncia</h1><br />
                  <FieldGroup
                    fields={[
                      {
                        id: "motivoDenuncia",
                        label: "Descripción",
                        type: "textarea",
                        required: true,
                        readOnly: true, // Añadido para que el campo sea solo lectura
                      },
                      {
                        id: "gravedadCaso",
                        label: "Gravedad del caso",
                        type: "select",
                        options: [
                          { value: "", label: "Selecciona una opción" },
                          { value: "baja", label: "Baja (Verde)" },
                          { value: "media", label: "Media (Amarillo)" },
                          { value: "alta", label: "Alta (Rojo)" },
                        ],
                        required: true,
                      },
                    ]}
                    values={values}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button
                text="Enviar"
                disabled={loading}
              />
            </form>
            <img className="violentometro" src="src/assets/img/violentometro.png" alt="" />
          </div>
        </div>
        <div className="denuncias-container">
          <h2>Denuncias Realizadas</h2>
          <EliminarDenuncia setDenuncias={setDenuncias} setError={setError} />
          {loadingDenuncias && <p>Cargando denuncias...</p>}
          {errorDenuncias && <p>{errorDenuncias}</p>}
          {!loadingDenuncias && !errorDenuncias && denuncias.length === 0 && (
            <p>No hay denuncias registradas.</p>
          )}
          {!loadingDenuncias && !errorDenuncias && denuncias.length > 0 && (
            <table className="denuncias-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Gravedad</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Estatus</th>
                </tr>
              </thead>
              <tbody>
                {denuncias.map((denuncia) => (
                  <tr key={denuncia.idDenuncia}>
                    <td>{denuncia.idDenuncia}</td>
                    <td>{denuncia.gravedadCaso}</td>
                    <td>{formatDate(denuncia.fechaDenuncia)}</td>
                    <td>{denuncia.horaDenuncia}</td>
                    <td>{denuncia.estatusDenuncia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistroDenunciaOrganism;
