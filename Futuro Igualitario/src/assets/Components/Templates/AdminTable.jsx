import React, { useState } from "react";
import Select from "../Atoms/Select";
import CheckboxGroup from "../Molecule/CheckboxGroup";
import TableHeader from "../Molecule/TableHeader";
import TableBody from "./TableBody";
import './AdminTable.css'

const AdminTable = () => {
  const [tableType, setTableType] = useState("users");
  const [selectedColumns, setSelectedColumns] = useState({
    name: true,
    age: true,
    gender: true,
    position: true,
  });

  const [data, setData] = useState({
    users: [
      { id: 1, name: "Juan", age: 30, gender: "Male", position: "Manager" },
      {
        id: 2,
        name: "María",
        age: 25,
        gender: "Female",
        position: "Developer",
      },
      { id: 3, name: "Pedro", age: 35, gender: "Male", position: "Designer" },
    ],
    appointments: [
      { id: 1, date: "2024-07-01", time: "10:00 AM", with: "Juan" },
      { id: 2, date: "2024-07-02", time: "11:00 AM", with: "María" },
      { id: 3, date: "2024-07-03", time: "02:00 PM", with: "Pedro" },
    ],
    complaints: [
      {
        id: 1,
        date: "2024-07-01",
        description: "Noise complaint",
        status: "Pending",
      },
      {
        id: 2,
        date: "2024-07-02",
        description: "Broken light",
        status: "Resolved",
      },
      {
        id: 3,
        date: "2024-07-03",
        description: "Lost item",
        status: "Pending",
      },
    ],

    news: [
      {
        idUsuario: 1,
        idNoticia: 1,
        name: "Noticia 1",
        description: "Descripcion 1",
        date: "20/07/2023",
      },
    ],

  });

  const [formData, setFormData] = useState(null);
  const [formMode, setFormMode] = useState(null);

  const handleCheckboxChange = (column) => {
    setSelectedColumns({
      ...selectedColumns,
      [column]: !selectedColumns[column],
    });
  };

  const handleTableChange = (event) => {
    const newTableType = event.target.value;
    setTableType(newTableType);
    setSelectedColumns(getDefaultColumns(newTableType));
  };

  const getDefaultColumns = (type) => {
    switch (type) {
      case "users":
        return { name: true, age: true, gender: true, position: true };
      case "appointments":
        return { date: true, time: true, with: true };
      case "complaints":
        return { date: true, description: true, status: true };

      case "news":
        return { name: true, description: true, date: true };
      default:
        return {};
    }
  };

  const handleAdd = () => {
    setFormMode("add");
    setFormData(getEmptyFormData());
  };

  const handleEdit = (item) => {
    setFormMode("edit");
    setFormData({ ...item });
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este registro?")) {
      const updatedData = data[tableType].filter((item) => item.id !== id);
      setData({ ...data, [tableType]: updatedData });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formMode === "add") {
      const newItem = { ...formData, id: Date.now() };
      setData({ ...data, [tableType]: [...data[tableType], newItem] });
    } else if (formMode === "edit") {
      const updatedData = data[tableType].map((item) =>
        item.id === formData.id ? formData : item
      );
      setData({ ...data, [tableType]: updatedData });
    }
    setFormMode(null);
    setFormData(null);
  };

  const getEmptyFormData = () => {
    switch (tableType) {
      case "users":
        return { name: "", age: "", gender: "", position: "" };
      case "appointments":
        return { date: "", time: "", with: "" };
      case "complaints":
        return { date: "", description: "", status: "" };

      case "news":
        return { name: "", description: "", date: "" };
      default:
        return {};
    }
  };

  const getColumns = () => {
    switch (tableType) {
      case "users":
        return {
          name: "Nombre",
          age: "Edad",
          gender: "Género",
          position: "Rol",
        };
      case "appointments":
        return { date: "Fecha", time: "Hora", with: "Con" };
      case "complaints":
        return { date: "Fecha", description: "Descripción", status: "Estado" };
      case "news":
        return {
          name: "nombre de la noticia",
          description: "descripcion",
          date: "fecha",
        };
      default:
        return {};
    }
  };

  const columns = getColumns();
  const tableData = data[tableType];

  return (
    <div>
      <Select
        id="tableType"
        value={tableType}
        onChange={handleTableChange}
        options={[
          { value: "users", label: "Gestión de Usuarios" },
          { value: "appointments", label: "Citas" },
          { value: "complaints", label: "Denuncias" },
          {value: "news", label: "Noticias"}
        ]}
      />

      <CheckboxGroup
        columns={columns}
        selectedColumns={selectedColumns}
        onCheckboxChange={handleCheckboxChange}
      />

      <div className="table-actions">
        <button onClick={handleAdd}>Agregar</button>
      </div>

      <table>
        <TableHeader columns={columns} selectedColumns={selectedColumns} />
        <TableBody
          data={tableData}
          columns={columns}
          selectedColumns={selectedColumns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </table>

      {formData && (
        <form className="form-popup" onSubmit={handleFormSubmit}>
          <h3>
            {formMode === "add" ? "Agregar Nuevo Registro" : "Editar Registro"}
          </h3>
          {Object.keys(columns).map((column) => (
            <div key={column} className="form-group">
              <label htmlFor={column}>{columns[column]}:</label>
              <input
                type="text"
                id={column}
                value={formData[column] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [column]: e.target.value })
                }
                required
              />
            </div>
          ))}
          <button type="submit">
            {formMode === "add" ? "Agregar" : "Actualizar"}
          </button>
          <button type="button" onClick={() => setFormMode(null)}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminTable;
