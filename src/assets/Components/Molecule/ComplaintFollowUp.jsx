import React from 'react';
import LabelProfile from '../Atoms/LabelAtom';

function ComplaintFollowUp() {
  return (
    <div className="detalles-denuncias">
      <LabelProfile strong="Estatus" text="En seguimiento" />
      <LabelProfile strong="Motivo" text="Agresión física" />
    </div>
  );
}

export default ComplaintFollowUp;