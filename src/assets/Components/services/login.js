import axios from 'axios';

const API_URL = 'http://localhost:3000/Usuarios';

export const login = async (email, password) => {
  try {
    const response = await axios.get(`${API_URL}/login`, {
      params: { email, password }
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error de conexión');
  }
};

export const getPerfil = async () => {
  try {
    const response = await axios.get(`${API_URL}/getPerfil`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error de conexión');
  }
};
