import axios from "axios";
import Swal from 'sweetalert2';

const API_URL = 'http://localhost:3000/denuncias';

export const addDenuncia = async (denunciaData) => {
    try {
        const response = await axios.post(`${API_URL}/addDenuncia`, denunciaData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data; 
    } catch (error) {
        if (error.response) {
            let errorMessage = 'Error en la solicitud';
            switch (error.response.status) {
                case 400:
                    errorMessage = 'Datos de registro incompletos, debes completar tus datos personales';
                    break;
                case 401:
                    errorMessage = 'No autorizado';
                    break;
                case 404:
                    errorMessage = 'ID de Usuario no encontrado';
                    break;
                case 500:
                    errorMessage = 'Error en el servidor';
                    break;
                default:
                    errorMessage = error.response.data?.message || `Error en la respuesta del servidor: ${error.response.status}`;
                    break;
            }
            Swal.fire({
                title: 'Error',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            throw new Error(errorMessage);
        } else if (error.request) {
            Swal.fire({
                title: 'Error',
                text: 'Error en la solicitud, no se recibió respuesta del servidor',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            throw new Error('Error en la solicitud, no se recibió respuesta del servidor');
        } else {
            Swal.fire({
                title: 'Error',
                text: `Error al configurar la solicitud: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            throw new Error(`Error al configurar la solicitud: ${error.message}`);
        }
    }
};
