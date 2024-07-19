import React, { useState } from 'react';
import {addNoticia, updateNoticia, deleteNoticia } from '../services/noticias';

const NewsTable = () => {
  const [noticias, setNoticias] = useState([]);
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    fecha: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNoticia(formData);
      setNoticias([...noticias, formData]); // Agregamos la nueva noticia al estado local
      setFormData({ titulo: '', descripcion: '', fecha: '' });
    } catch (error) {
      console.error('Error adding noticia:', error);
    }
  };

  const handleUpdate = async (id) => {
    const updatedData = {
      titulo: formData.titulo,
      descripcion: formData.descripcion,
      fecha: formData.fecha
    };
    try {
      await updateNoticia(id, updatedData);
      const updatedNoticias = noticias.map(noticia =>
        noticia.id === id ? { ...noticia, ...updatedData } : noticia
      );
      setNoticias(updatedNoticias);
    } catch (error) {
      console.error('Error updating noticia:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNoticia(id);
      const updatedNoticias = noticias.filter(noticia => noticia.id !== id);
      setNoticias(updatedNoticias);
    } catch (error) {
      console.error('Error deleting noticia:', error);
    }
  };

  return (
    <div>
      <h2>Administrar Noticias</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Descripción:
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Fecha:
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Agregar Noticia</button>
      </form>
      
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {noticias.map(noticia => (
            <tr key={noticia.id}>
              <td>{noticia.titulo}</td>
              <td>{noticia.descripcion}</td>
              <td>{new Date(noticia.fecha).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleUpdate(noticia.id)}>Actualizar</button>
                <button onClick={() => handleDelete(noticia.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsTable;
