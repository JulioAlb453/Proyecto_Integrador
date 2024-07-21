import axios from 'axios';

const API_URL = 'http://localhost:3000/Usuarios';


export const datosPersonales = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/registrarPersonal`, data, {
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
