import React, { useState } from 'react';
import Select from '../Atoms/SelectAtom'
import UsersAdminTable from '../Organism/UsersAdminTable';
import EventsAdminTable from '../Organism/EventsAdminTable';
import SocialSupportsTable from '../Organism/SocialSupportsTable';
import NewsTable from '../Organism/NewsTable';
import AppointmentsTable from '../Organism/AppointmentsTable';
import './AdminTable.css'

const AdminTable = () => {
  const [tableType, setTableType] = useState('users');
  const [data, setData] = useState({
    users: [
      { id: 1, name: 'Juan', age: 30, gender: 'Male', position: 'Manager' },
      { id: 2, name: 'María', age: 25, gender: 'Female', position: 'Staff' },
    ],
    events: [],
    socialSupports: [],
    news: [],
    appointments: [],
  });

  const handleDataChange = (tableType, newData) => {
    setData((prevData) => ({
      ...prevData,
      [tableType]: newData,
    }));
  };

  const options = [
    { value: 'users', label: 'Administrar Usuarios' },
    { value: 'events', label: 'Administrar Eventos' },
    { value: 'socialSupports', label: 'Apoyos Sociales' },
    { value: 'news', label: 'Noticias' },
    { value: 'appointments', label: 'Administrar Citas' },
  ];

  const renderTable = () => {
    switch (tableType) {
      case 'users':
        return <UsersAdminTable data={data.users} onDataChange={(newData) => handleDataChange('users', newData)} />;
      case 'events':
        return <EventsAdminTable data={data.events} onDataChange={(newData) => handleDataChange('events', newData)} />;
      case 'socialSupports':
        return <SocialSupportsTable data={data.socialSupports} onDataChange={(newData) => handleDataChange('socialSupports', newData)} />;
      case 'news':
        return <NewsTable data={data.news} onDataChange={(newData) => handleDataChange('news', newData)} />;
      case 'appointments':
        return <AppointmentsTable data={data.appointments} onDataChange={(newData) => handleDataChange('appointments', newData)} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Select value={tableType} onChange={(e) => setTableType(e.target.value)} options={options} />
      {renderTable()}
    </div>
  );
};

export default AdminTable;
