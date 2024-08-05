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
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error('Datos incompletos o incorrectos:', error.response.data);
          throw new Error('Datos incompletos o incorrectos');
        case 401:
          console.error('No autorizado:', error.response.data);
          throw new Error('No autorizado');
        case 404:
          console.error('ID de Usuario no encontrado:', error.response.data);
          throw new Error('ID de Usuario no encontrado');
        case 409:
          console.error('Datos personales ya registrados:', error.response.data);
          throw new Error('Datos personales ya registrados');
        case 500:
          console.error('Error en el servidor:', error.response.data);
          throw new Error('Error en el servidor');
        default:
          console.error('Error en la respuesta del servidor:', {
            status: error.response.status,
            data: error.response.data,
            headers: error.response.headers
          });
          throw new Error(error.response.data?.message || `Error en la respuesta del servidor: ${error.response.status}`);
      }
    } else if (error.request) {
      console.error('Error en la solicitud, no se recibió respuesta del servidor:', {
        request: error.request
      });
      throw new Error('Error en la solicitud, no se recibió respuesta del servidor');
    } else {
      console.error('Error al configurar la solicitud:', {
        message: error.message,
        config: error.config
      });
      throw new Error(`Error al configurar la solicitud: ${error.message}`);
    }
  }
};

export const datosEconomicos = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/registrarEconomico`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error('Datos incompletos o incorrectos:', error.response.data);
          throw new Error('Datos incompletos o incorrectos');
        case 401:
          console.error('No autorizado:', error.response.data);
          throw new Error('No autorizado');
        case 404:
          console.error('ID de Usuario no encontrado:', error.response.data);
          throw new Error('ID de Usuario no encontrado');
        case 409:
          console.error('Datos economicos ya registrados:', error.response.data);
          throw new Error('Datos economicos ya registrados');
        case 500:
          console.error('Error en el servidor:', error.response.data);
          throw new Error('Error en el servidor');
        default:
          console.error('Error en la respuesta del servidor:', {
            status: error.response.status,
            data: error.response.data,
            headers: error.response.headers
          });
          throw new Error(error.response.data?.message || `Error en la respuesta del servidor: ${error.response.status}`);
      }
    } else if (error.request) {
      console.error('Error en la solicitud, no se recibió respuesta del servidor:', {
        request: error.request
      });
      throw new Error('Error en la solicitud, no se recibió respuesta del servidor');
    } else {
      console.error('Error al configurar la solicitud:', {
        message: error.message,
        config: error.config
      });
      throw new Error(`Error al configurar la solicitud: ${error.message}`);
    }
  }
};

export const datosVivienda = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/registrarVivienda`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error('Datos incompletos o incorrectos:', error.response.data);
          throw new Error('Datos incompletos o incorrectos');
        case 401:
          console.error('No autorizado:', error.response.data);
          throw new Error('No autorizado');
        case 404:
          console.error('ID de Usuario no encontrado:', error.response.data);
          throw new Error('ID de Usuario no encontrado');
        case 409:
          console.error('Datos de vivienda ya registrados:', error.response.data);
          throw new Error('Datos de vivienda ya registrados');
        case 500:
          console.error('Error en el servidor:', error.response.data);
          throw new Error('Error en el servidor');
        default:
          console.error('Error en la respuesta del servidor:', {
            status: error.response.status,
            data: error.response.data,
            headers: error.response.headers
          });
          throw new Error(error.response.data?.message || `Error en la respuesta del servidor: ${error.response.status}`);
      }
    } else if (error.request) {
      console.error('Error en la solicitud, no se recibió respuesta del servidor:', {
        request: error.request
      });
      throw new Error('Error en la solicitud, no se recibió respuesta del servidor');
    } else {
      console.error('Error al configurar la solicitud:', {
        message: error.message,
        config: error.config
      });
      throw new Error(`Error al configurar la solicitud: ${error.message}`);
    }
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/getUser`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al obtener el user');
  }
};

export const getTrabajador = async () => {
  try {
    const response = await axios.get(`${API_URL}/getTrabajador`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al obtener el trabajador');
  }
};

export const getDatosPersonales1 = async () => {
  try {
    const response = await axios.get(`${API_URL}/getDatosPersonales1`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al obtener los datos');
  }
};


export const getDatosPersonales = async (idUsuario) => {
  try {
    const response = await axios.get(`${API_URL}/getDatosPersonales/${idUsuario}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al obtener los datos');
  }
};

export const getDatosVivienda = async (idUsuario) => {
  try {
    const response = await axios.get(`${API_URL}/getDatosVivienda/${idUsuario}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al obtener los datos');
  }
};

export const getDatosEconomicos = async (idUsuario) => {
  try {
    const response = await axios.get(`${API_URL}/getDatosEconomicos/${idUsuario}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al obtener los datos');
  }
};

export const verAllUsuarios = async () => {
  try {
    const response = await axios.get(`${API_URL}/verAllUsers`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error al obtener los datos');
  }
};


