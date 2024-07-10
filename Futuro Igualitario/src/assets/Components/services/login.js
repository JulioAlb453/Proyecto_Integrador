import axios from 'axios';

const API_URL = 'http://localhost:3000/Usuarios/login';

export const login = async (user) => {
    try {
      const response = await axios.get(API_URL, user);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };
