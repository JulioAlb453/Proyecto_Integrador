import React, { useState, useEffect } from "react";
import FieldGroup from "../Molecule/FieldGroupDenuncia";
import Button from "../Atoms/Button";
import Navbar from "../Molecule/Navbar";
import Footer from "../Molecule/Footer";
import "../Styles/organism/RegistroDenuncia.css";
import { addDenuncia, getAllDenuncias, finalizarDenuncia } from '../services/denuncia';
import Swal from 'sweetalert2';

const RegistroDenunciaOrganism = () => {
  const [values, setValues] = useState({
    motivoDenuncia: "",
    gravedadCaso: "",
    caso: "",
    fechaCaso: "",
    violentador: "",
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

    // Actualiza las opciones del campo 'caso' basado en la gravedad seleccionada
    if (id === "gravedadCaso") {
      const casosPorGravedad = {
        baja: [
          { value: "celos", label: "Celos posesivos" },
          { value: "Mentir", label: "Mentir/Engañar" },
          { value: "Culpabilizar", label: "Culpabilizar" },
          { value: "Chantajear", label: "Chantajear" },
          { value: "Bromas hirientes", label: "Bromas hirientes" },
          { value: "Descalificar", label: "Descalificar" },
        ],
        media: [
          { value: "Agresion Verbal", label: "Agresión verbal (Insultos)" },
          { value: "Controlar", label: "Controlar/Prohibir" },
          { value: "Intidimidar", label: "Intidimidar/Amenazar" },
          { value: "Insultar", label: "Insultar verbalmente" },
          { value: "Destruir articulos personales", label: "Destruir articulos personales" },
        ],
        alta: [
          { value: "Acercamientos fisicos", label: "Acercamiento fisico (Manoseo)" },
          { value: "Amenaza fisica", label: "Amenazar con objetos" },
          { value: "Agresion fisica", label: "Agresiones fisicas (Golpes)" },
          { value: "Aislamiento", label: "Aislamiento" },
          { value: "Difusion intima", label: "Difusion de contenido intimo" },
          { value: "Sextorsion", label: "Chantaje con propositos sexuales/intimos" },
          { value: "Abuso sexual", label: "Abuso sexual (Violacion)" },
        ],
      };
      setValues(prevValues => ({
        ...prevValues,
        caso: "", // Resetea el campo caso cuando cambie la gravedad
        casosOpciones: casosPorGravedad[value] || [],
      }));
    }
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

    console.log("Datos de denuncia:", denunciaData); // Verifica los datos que se envían

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
        caso: "",
        fechaCaso: "",
        violentador: "",
      });
      const data = await getAllDenuncias();
      setDenuncias(data);
    } catch (err) {
      console.log("Error:", err.message); // Verifica los errores en consola
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalizar = async (idDenuncia, estatusDenuncia) => {
    const token = localStorage.getItem('token');
    if (!token) {
      Swal.fire('Error', 'Usuario no autenticado', 'error');
      return;
    }

    if (estatusDenuncia === 'finalizado') {
      Swal.fire({
        title: 'Denuncia ya finalizada',
        text: 'Esta denuncia ya ha sido finalizada.',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
      return;
    }

    try {
      await finalizarDenuncia(idDenuncia, token);
      Swal.fire('Éxito', 'Denuncia finalizada correctamente', 'success');
      const data = await getAllDenuncias();
      setDenuncias(data);
    } catch (error) {
      Swal.fire('Error', error.message || 'Error al finalizar la denuncia', 'error');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options);
  };

  const getGravedadStyle = (gravedadCaso) => {
    switch (gravedadCaso) {
      case "baja":
        return { backgroundColor: "lightgreen", color: "black" };
      case "media":
        return { backgroundColor: "yellow", color: "black" };
      case "alta":
        return { backgroundColor: "red", color: "white" };
      default:
        return {};
    }
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
                    fields={[
                      {
                        id: "gravedadCaso",
                        label: "Gravedad del caso",
                        type: "select",
                        options: [
                          { value: "", label: "Selecciona una opción", style: {} },
                          { value: "baja", label: "Baja (Verde)", style: getGravedadStyle("baja") },
                          { value: "media", label: "Media (Amarillo)", style: getGravedadStyle("media") },
                          { value: "alta", label: "Alta (Rojo)", style: getGravedadStyle("alta") },
                        ],
                        required: true,
                      },
                      {
                        id: "caso",
                        label: "Caso",
                        type: "select",
                        options: values.casosOpciones || [],
                        required: true,
                        hidden: values.gravedadCaso === '',
                      },
                      {
                        id: "fechaCaso",
                        label: "Fecha del Caso",
                        type: "date",
                        required: true,
                        hidden: values.gravedadCaso === '',
                      },
                      {
                        id: "violentador",
                        label: "Agresor",
                        type: "select",
                        options:['Padre', 'Madre', 'Familiar', 'Conyúge', 'Conocido', 'No conocido' ],
                        required: true,
                        hidden: values.gravedadCaso === '',
                      },
                      {
                        id: "motivoDenuncia",
                        label: "Descripción",
                        type: "textarea",
                        required: true,
                      },
                    ]}
                    values={values}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button className='boton1'
                text="Enviar"
                disabled={loading}
              />
            </form>
            <img className="violentometro" src="src/assets/img/violentometro.png" alt="" />
          </div>
        </div>
        <div className="denuncias-container">
          <h2>Denuncias Realizadas</h2>
          {loadingDenuncias && <p>Cargando denuncias...</p>}
          {errorDenuncias && <p>{errorDenuncias}</p>}
          {!loadingDenuncias && !errorDenuncias && denuncias.length === 0 && (
            <p>No hay denuncias registradas.</p>
          )}
          {!loadingDenuncias && !errorDenuncias && denuncias.length > 0 && (
            <table className="denuncias-table">
              <thead>
                <tr>
                  <th>Folio</th>
                  <th>Gravedad</th>
                  <th>Caso</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Estatus</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {denuncias.map((denuncia) => (
                  <tr key={denuncia.idDenuncia}>
                    <td>{denuncia.idDenuncia}</td>
                    <td>{denuncia.gravedadCaso}</td>
                    <td>{denuncia.caso}</td>
                    <td>{formatDate(denuncia.fechaDenuncia)}</td>
                    <td>{denuncia.horaDenuncia}</td>
                    <td>{denuncia.estatusDenuncia}</td>
                    <td>
                      <button
                        onClick={() => handleFinalizar(denuncia.idDenuncia, denuncia.estatusDenuncia)}
                        disabled={denuncia.estatusDenuncia === 'finalizada'}
                      >
                        Finalizar
                      </button>
                    </td>
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
