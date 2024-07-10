import React, { useState } from 'react';
import { CiLock } from 'react-icons/ci';
import { SlUserFemale } from 'react-icons/sl';
import './LoginForm.css';
import { login } from '../../Components/services/login'; // Asegúrate de importar correctamente tu función de servicio de login

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData); 
      alert(response.mensaje); 
      localStorage.setItem('token', response.token);
      alert(`Token guardado: ${response.token}`);
      window.location.href = '/';
    } catch (error) {
      alert('Error logging in');
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

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Recuérdame
            </label>
            <a href="#" className="link">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button type="submit">Iniciar sesión</button>

          <div className="register-link">
            <p>
              ¿No tienes una cuenta?{" "}
              <a href="/registrar" className="link">
                Regístrate!
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
