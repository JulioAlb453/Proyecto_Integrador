// services/noticias.js
import axios from 'axios';

const API_URL = 'https://figualitarioapi.integrador.xyz/noticias';

export const getAllNoticias = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllNoticias`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al agregar la noticia');
  }
};


export const addNoticia = async (noticia) => {
  try {
    const response = await axios.post(`${API_URL}/addNoticia`, noticia, {
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

export const updateNoticia = async (id, noticia) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, noticia, {
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

export const deleteNoticia = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al eliminar la noticia');
  }
};
