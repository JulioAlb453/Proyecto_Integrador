import axios from 'axios';

const API_URL = 'http://localhost:3000/Usuarios/addUser';


export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};
