import React from 'react';
import LabelProfile from '../Atoms/LabelProfile';

function AppointmentSummary() {
  return (
    <div className="detalles-cita">
      <div className="tipo-cita">
        <LabelProfile strong="Tipo de cita" text="Juridica" />
        <LabelProfile strong="Fecha de la cita" text="XX/XX/XXXX" />
        <LabelProfile strong="Hora de la cita" text="00:00" />
      </div>
      <div className="tipo-cita2">
        <LabelProfile strong="Tipo de cita" text="Psicologica" />
        <LabelProfile strong="Fecha de la cita" text="XX/XX/XXXX" />
        <LabelProfile strong="Hora de la cita" text="00:00" />
      </div>
    </div>
  );
}

export default AppointmentSummary;