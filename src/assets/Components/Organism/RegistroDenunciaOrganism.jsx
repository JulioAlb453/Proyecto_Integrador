import React, { useState } from "react";
import FieldGroup from "../Molecule/FieldGroupDenuncia";
import Button from "../Atoms/Button";
import Message from "../Atoms/Message";
import Navbar from "../Molecule/Navbar";
import Footer from "../Molecule/Footer";
import "../Styles/organism/RegistroDenuncia.css"; 
import { addDenuncia } from '../services/denuncia';
import Swal from 'sweetalert2';

const RegistroDenunciaOrganism = () => {
  const [values, setValues] = useState({
    motivoDenuncia: "",
    gravedadCaso: "", 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
    setSuccess(null);
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
      const response = await addDenuncia(denunciaData, token);
      Swal.fire({
        title: 'Éxito',
        text: 'Denuncia registrada correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
    }); 
      setSuccess("Denuncia registrada correctamente");
      setValues({
        motivoDenuncia: "",
        gravedadCaso: "",
      });
    } catch (err) {
      console.log("Error:", err.message);
      setError(err.message);
    } finally {
      console.log("Setting loading to false");
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <Navbar />
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
                    },
                    {
                      id: "gravedadCaso",
                      label: "Gravedad del caso",
                      type: "select",
                      options: [
                        { value: "", label: "Selecciona una opción" },
                        { value: "baja", label: "Baja" },
                        { value: "media", label: "Media" },
                        { value: "alta", label: "Alta" },
                      ],
                      required: true,
                    },
                  ]}
                  values={values}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && <Message text={error} type="error" />}
            {success && <Message text={success} type="success" />}
            <Button
              text="Enviar"
              disabled={loading}
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistroDenunciaOrganism;
