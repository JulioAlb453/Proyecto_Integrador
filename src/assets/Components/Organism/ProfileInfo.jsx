import React from 'react';
import ProfileDetail from '../Molecule/DetallesPerfil';
import AppointmentSummary from '../Molecule/ResumenCita';
import ComplaintFollowUp from '../Molecule/SeguimientoDenuncia';
function ProfileInfo() {
  return (
    <div className="profile-content">
      <div className="profile-info">
        <ProfileDetail />
      </div>
      <div className="resumen-cita">
        <h2>RESUMEN DE LA CITA</h2>
        <AppointmentSummary />
      </div>
      <div className="seguimiento-denuncias">
        <h2>SEGUIMIENTO DE LA DENUNCIA</h2>
        <ComplaintFollowUp />
      </div>
    </div>
  );
}

export default ProfileInfo;