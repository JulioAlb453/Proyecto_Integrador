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

export const updateNoticia = async (idNoticia, noticia) => {
  try {
    const response = await axios.put(`${API_URL}/updateNoticias/${idNoticia}`, noticia, {
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

export const deleteNoticia = async (idNoticia) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteNoticias/${idNoticia}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al eliminar la noticia');
  }
};
