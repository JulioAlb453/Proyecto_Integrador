import React, { useEffect, useState } from 'react';
import '../Styles/Molecule/SeguimientoDenuncia.css';
import LabelProfile from '../Atoms/LabelAtom';
import { getAllDenuncias } from '../services/denuncia';

function SeguimientoDenuncia() {
  const [denuncia, setDenuncia] = useState({
    idDenuncia: '',
    estatusDenuncia: '',
    gravedadCaso: '',
    caso: '',
    fechaDenuncia: ''
  });

  useEffect(() => {
    const fetchDenuncia = async () => {
      const result = await getAllDenuncias();
      setDenuncia(result[result.length - 1]);
    };

    fetchDenuncia();
  }, []);

  const formatFecha = (fecha) => {
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
  };

  return (
    <div className="detalles-denuncias">
      <h3>DENUNCIA RECIENTE</h3>
      {denuncia.idDenuncia ? (
        <><p>
          Estatus: <LabelProfile strong="Estatus de la Denuncia" text={denuncia.estatusDenuncia} /><br />
          Gravedad: <LabelProfile strong="Gravedad del Caso" text={denuncia.gravedadCaso} /><br />
          Caso: <LabelProfile strong="Caso" text={denuncia.caso} /><br />
          Fecha de Denuncia: <LabelProfile strong="Fecha de la Denuncia" text={formatFecha(denuncia.fechaDenuncia)} /><br />
          Folio: <LabelProfile strong="Id de la Denuncia" text={denuncia.idDenuncia} /><br />
        </p></>
      ) : (
        <p>No hay denuncias disponibles.</p>
      )}
    </div>
  );
}

export default SeguimientoDenuncia;
