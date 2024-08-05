// services/noticias.js
import axios from 'axios';

const API_URL = 'https://figualitarioapi.integrador/eventos';

export const getAllEventos = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllEventos`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al agregar la noticia');
  }
};


export const addEvento = async (evento) => {
  try {
    const response = await axios.post(`${API_URL}/addEvento`, evento, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al agregar la noticia');
  }
};

export const updateEvento = async (idEventos, evento) => {
  try {
    const response = await axios.put(`${API_URL}/updateEvento/${idEventos}`, evento, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al actualizar la noticia');
  }
};

export const deleteEvento = async (idEventos) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteEvento/${idEventos}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al eliminar la noticia');
  }
};
