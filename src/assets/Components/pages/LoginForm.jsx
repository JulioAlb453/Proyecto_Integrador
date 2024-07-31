import React, { useState } from 'react';
import { CiLock } from 'react-icons/ci';
import { SlUserFemale } from 'react-icons/sl';
import '../Styles/templates/LoginForm.css';
import { login, getPerfil } from '../../Components/services/login';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Atoms/Authcontext';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login: authenticate } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(formData.email, formData.password);
      const { token } = data;
      authenticate(token);
      
      const perfilData = await getPerfil();
      const { tipoPerfil } = perfilData;
      if (tipoPerfil == 1) {
        navigate('/AdminHome');
      } else if (tipoPerfil == 2) {
        navigate('/home');
      } else {
        alert('Tipo de perfil desconocido.');
      }
    } catch (error) {
      alert('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <section className="container-login">
      <img
        src="https://www.nvinoticias.com/sites/default/files/styles/medium/public/articulos/2024/Mar/marcha-feminista-oaxaca6.jpg.webp?itok=R94gpTZc"
        alt="Marcha Feminista"
        className="imagen"
      />
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Inicio de sesión</h1>
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Correo electrónico" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required  
            />
            <SlUserFemale className="icon" />
          </div>
          <div className="input-box">
            <input 
              type="password" 
              placeholder="Contraseña" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required 
            />
            <CiLock className="icon" />
          </div>
          <button type="submit">Iniciar sesión</button>

          <div className="register-link">
            <p>
              ¿No tienes una cuenta?{" "}
              <a href="/registrar" className="link">
                ¡Regístrate!
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
