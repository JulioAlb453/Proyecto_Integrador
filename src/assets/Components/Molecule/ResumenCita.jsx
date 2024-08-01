import React, { useEffect, useState } from 'react';
import LabelProfile from '../Atoms/LabelAtom';
import '../Styles/Molecule/ResumenCita.css';
import { getAllCitasJuridicas, getAllCitasPsicologicas } from '../services/citas';

function DetallesCita() {
  const [juridicaCita, setJuridicaCita] = useState({
    idCita: '',
    tipo: '',
    fecha: '',
    idDenuncia: '',
    horario: '',
    idUsuario: ''
  });
  const [psicologicaCita, setPsicologicaCita] = useState({
    idCita: '',
    tipo: '',
    fecha: '',
    idDenuncia: '',
    horario: '',
    idUsuario: ''
  });

  useEffect(() => {
    const fetchCitas = async () => {
      const juridicaResult = await getAllCitasJuridicas();
      const psicologicaResult = await getAllCitasPsicologicas();
      setJuridicaCita(juridicaResult[juridicaResult.length - 1]);
      setPsicologicaCita(psicologicaResult[psicologicaResult.length - 1]);
    };

    fetchCitas();
  }, []);

  const formatFecha = (fecha) => {
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
  };

  return (
    <div className="detalles-cita">
      <div className="tipo-cita">
        {juridicaCita.idCita ? (
          <><h4>Juridicas</h4>
            <p>
              Fecha de la cita: <LabelProfile strong="Fecha de la cita" text={juridicaCita.fecha ? formatFecha(juridicaCita.fecha) : 'XX/XX/XXXX'} /> <br />
              Horario: <LabelProfile strong="Hora de la cita" text={juridicaCita.horario || '00:00'} /> <br />
              Folio: <LabelProfile strong="Id Cita" text={juridicaCita.idCita || '0'} /> <br />
            </p>
          </>
        ) : (
          <p>No hay citas jurídicas disponibles.</p>
        )}
      </div>
      <div className="tipo-cita2">
        {psicologicaCita.idCita ? (
          <><h4>Psicologicas</h4>
          <p>
            Fecha de la cita: <LabelProfile strong="Fecha de la cita" text={psicologicaCita.fecha ? formatFecha(psicologicaCita.fecha) : 'XX/XX/XXXX'} /> <br />
            Horario: <LabelProfile strong="Horario de la cita" text={psicologicaCita.horario || '00:00'} /> <br />
            Folio: <LabelProfile strong="Id Cita" text={psicologicaCita.idCita || '0'} /> <br />
          </p></>
        ) : (
          <p>No hay citas psicológicas disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default DetallesCita;
