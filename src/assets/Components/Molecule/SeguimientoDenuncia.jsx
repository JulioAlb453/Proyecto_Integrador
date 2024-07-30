import React from 'react';
import LabelProfile from '../Atoms/LabelAtom';
import '../Styles/Molecule/SeguimientoDenuncia.css'
function SeguimientoDenuncia() {
  return (
    <div className="detalles-denuncias">
    <h2>SEGUIMIENTO DE LA DENUNCIA</h2>
      <LabelProfile strong="Estatus" text="En seguimiento" />
      <LabelProfile strong="Motivo" text="Agresión física" />
    </div>
  );
}

export default SeguimientoDenuncia;