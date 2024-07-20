import React from 'react';
import Label from '../Atoms/Label';

function AppointmentSummary() {
  return (
    <div className="detalles-cita">
      <div className="tipo-cita">
        <Label strong="Tipo de cita" text="Juridica" />
        <Label strong="Fecha de la cita" text="XX/XX/XXXX" />
        <Label strong="Hora de la cita" text="00:00" />
      </div>
      <div className="tipo-cita2">
        <Label strong="Tipo de cita" text="Psicologica" />
        <Label strong="Fecha de la cita" text="XX/XX/XXXX" />
        <Label strong="Hora de la cita" text="00:00" />
      </div>
    </div>
  );
}

export default AppointmentSummary;