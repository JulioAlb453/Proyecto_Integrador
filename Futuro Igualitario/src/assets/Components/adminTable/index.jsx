import React, { useState } from 'react';
import '../adminTable/adminTable.css'; // Asegúrate de crear este archivo CSS
function AdminTable() {
  const userData = [
    { id: 1, name: 'Juan', age: 30, gender: 'Male', position: 'Manager' },
    { id: 2, name: 'María', age: 25, gender: 'Female', position: 'Developer' },
    { id: 3, name: 'Pedro', age: 35, gender: 'Male', position: 'Designer' },
    // Más datos...
  ];

  const appointmentData = [
    { id: 1, date: '2024-07-01', time: '10:00 AM', with: 'Juan' },
    { id: 2, date: '2024-07-02', time: '11:00 AM', with: 'María' },
    { id: 3, date: '2024-07-03', time: '02:00 PM', with: 'Pedro' },
    // Más datos...
  ];

  const complaintData = [
    { id: 1, date: '2024-07-01', description: 'Noise complaint', status: 'Pending' },
    { id: 2, date: '2024-07-02', description: 'Broken light', status: 'Resolved' },
    { id: 3, date: '2024-07-03', description: 'Lost item', status: 'Pending' },
    // Más datos...
  ];

  const [tableType, setTableType] = useState('users');
  const [selectedColumns, setSelectedColumns] = useState({
    name: true,
    age: true,
    gender: true,
    position: true,
  });

  const handleCheckboxChange = (column) => {
    setSelectedColumns({ ...selectedColumns, [column]: !selectedColumns[column] });
  };

  const handleTableChange = (event) => {
    setTableType(event.target.value);
    setSelectedColumns(getDefaultColumns(event.target.value));
  };

  const getDefaultColumns = (type) => {
    switch (type) {
      case 'users':
        return { name: true, age: true, gender: true, position: true };
      case 'appointments':
        return { date: true, time: true, with: true };
      case 'complaints':
        return { date: true, description: true, status: true };
      default:
        return {};
    }
  };

  const getData = () => {
    switch (tableType) {
      case 'users':
        return userData;
      case 'appointments':
        return appointmentData;
      case 'complaints':
        return complaintData;
      default:
        return [];
    }
  };

  const getColumns = () => {
    switch (tableType) {
      case 'users':
        return { name: 'Nombre', age: 'edad', gender: 'genero', position: 'rol' };
      case 'appointments':
        return { date: 'fecha', time: 'hora', with: 'id' };
      case 'complaints':
        return { date: 'fecha', description: 'descripcion', status: 'Status' };
      default:
        return {};
    }
  };

  const data = getData();
  const columns = getColumns();

  return (
    <div>
      <div className="table-select">
        <label htmlFor="tableType">Seleccionar tipo de tabla:</label>
        <select id="tableType" value={tableType} onChange={handleTableChange}>
          <option value="users">Gestión de Usuarios</option>
          <option value="appointments">Citas</option>
          <option value="complaints">Denuncias</option>
        </select>
      </div>

      <div className="checkbox-container">
        {Object.keys(columns).map((column) => (
          <label key={column} className="checkbox-label">
            <input
              type="checkbox"
              checked={selectedColumns[column]}
              onChange={() => handleCheckboxChange(column)}
            />
            {columns[column]}
          </label>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            {Object.keys(columns).map(
              (column) => selectedColumns[column] && <th key={column}>{columns[column]}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {Object.keys(columns).map(
                (column) => selectedColumns[column] && <td key={column}>{item[column]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
