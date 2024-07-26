import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalInfoMol from '../Molecule/PersonalInfoMol';
import EconomicDataMol from '../Molecule/EconomicDataMol';
import HousingDataMol from '../Molecule/HousingDataMol';
import AppointmentSummaryMol from '../Molecule/AppointmentSummaryMol';
import CardAtom from '../Atoms/CardAtom';
import '../Styles/organism/UserProfileOrganism.css'

function UserProfileOrganism() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simular la obtención de datos desde una API
    const fetchUserData = () => {
      // Simulación de datos
      const simulatedData = {
        personalInfo: {
          name: 'Ana Pérez',
          email: 'ana.perez@example.com',
          phone: '123-456-7890'
        },
        economicData: {
          income: '3000 USD',
          expenses: '1500 USD'
        },
        housingData: {
          address: '123 Main St, Anytown, USA',
          type: 'Apartamento'
        },
        appointment: {
          type: 'Psicológica',
          date: '2024-07-20',
          details: 'Consulta general'
        },
      };

      setTimeout(() => {
        setUserData(simulatedData);
        setLoading(false);
      }, 1000); // Simula un retraso de 1 segundo para imitar una llamada a la API
    };

    fetchUserData();
  }, []);

  const navigateToForm = (path) => {
    navigate(path);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No data available</div>;
  }

  return (
    <div className="user-profile-organism">
      <div className="personal-info">
        <h1>Información Personal</h1>
        <PersonalInfoMol userInfo={userData.personalInfo} />
      </div>
      <div className="appointment-summary">
        <h1>Resumen de Cita</h1>
        <AppointmentSummaryMol appointment={userData.appointment} />
      </div>
      <div className="economic-data">
        <h1>Datos Económicos</h1>
        <EconomicDataMol economicData={userData.economicData} />
      </div>
      <div className="housing-data">
        <h1>Datos de Vivienda</h1>
        <HousingDataMol housingData={userData.housingData} />
      </div>
      <div className="action-cards">
        <CardAtom
          imgSrc="/path/to/image1.jpg"
          imgAlt="Editar Información Personal"
          title="Editar Información Personal"
          description="Actualiza tus datos personales."
          onClick={() => navigateToForm('/RegistroDatosUsuaria')}
        />
        <CardAtom
          imgSrc="/path/to/image2.jpg"
          imgAlt="Editar Datos Económicos"
          title="Editar Datos Económicos"
          description="Actualiza tus datos económicos."
          onClick={() => navigateToForm('/RegistroEconomico')}
        />
        <CardAtom
          imgSrc="/path/to/image3.jpg"
          imgAlt="Editar Datos de Vivienda"
          title="Editar Datos de Vivienda"
          description="Actualiza tus datos de vivienda."
          onClick={() => navigateToForm('/RegistroVivienda')}
        />
      </div>
    </div>
  );
}

export default UserProfileOrganism;
