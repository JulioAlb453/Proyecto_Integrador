import axios from 'axios';

const API_URL = 'http://localhost:3000/citas/addCita';

export const addCita = async (cita, token) => {
  try {
    const response = await axios.post(API_URL, cita, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding cita:', error);
    throw error;
  }
};
