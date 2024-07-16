import React from 'react';
import Label from '../Atoms/Label';

function ComplaintFollowUp() {
  return (
    <div className="detalles-denuncias">
      <Label strong="Estatus" text="En seguimiento" />
      <Label strong="Motivo" text="Agresión física" />
    </div>
  );
}

export default ComplaintFollowUp;