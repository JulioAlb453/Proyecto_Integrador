import React, { useState } from "react";
import FieldGroup from "../Molecule/FieldGroupDenuncia";
import Button from "../Atoms/Button";
import Message from "../Atoms/Message";
import Navbar from "../Molecule/Navbar";
import Footer from "../Molecule/Footer";
import "../Styles/organism/RegistroDenuncia.css"; // Asegúrate de tener estilos

const RegistroDenunciaOrganism = () => {
  const [values, setValues] = useState({
    nombreDenunciante: "",
    fechaDenuncia: "",
    descripcion: "",
    evidencias: "",
    gravedad: "", // Campo para gravedad
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

    try {
      const response = await fetch(
        "https://your-api-endpoint.com/registro-denuncia",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSuccess("Denuncia registrada correctamente");
      setValues({
        nombreDenunciante: "",
        fechaDenuncia: "",
        descripcion: "",
        gravedad: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Contenerdor principal
    <div className="page-container">
      <Navbar />
      {/* Contenedor del form */}
      <div className="form-wrapper">
      {/* Contenedor del contenido del form */}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-section">
            {/* Parte de la izquierda del form */}
              <div className="cofre-left">
                <FieldGroup
                  fields={[
                    {
                      id: "nombreDenunciante",
                      label: "Nombre del denunciante",
                      required: true,
                    },
                    {
                      id: "fechaDenuncia",
                      label: "Fecha de denuncia",
                      type: "date",
                      required: true,
                    },
                  ]}
                  values={values}
                  onChange={handleChange}
                />
              </div>
              {/* Parte de la derecha */}
              <div className="cofre-right">
                <FieldGroup
                  fields={[
                    {
                      id: "descripcion",
                      label: "Descripción",
                      type: "textarea",
                      required: true,
                    },,
                    {
                      id: "gravedad",
                      label: "Gravedad del abuso",
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
              text={loading ? "Enviando..." : "Enviar"}
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
