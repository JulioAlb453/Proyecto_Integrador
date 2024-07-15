import React, { useState } from 'react';
import { CiLock } from 'react-icons/ci';
import { SlUserFemale } from 'react-icons/sl';
import './Register.css';
import { addUser } from '../../Components/services/usuarios.js';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    idTrabajador: ''
  });
  const [isWorker, setIsWorker] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    setIsWorker(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(formData);
      alert('User added successfully');
      setFormData({
        email: '',
        password: '',
        idTrabajador: ''
      });
      setIsWorker(false); // Restablecer el checkbox también
    } catch (error) {
      alert('Error adding user');
    }
  };

  return (
    <section className="container-register">
      <img
        src="https://www.nvinoticias.com/sites/default/files/styles/medium/public/articulos/2024/Mar/marcha-feminista-oaxaca6.jpg.webp?itok=R94gpTZc"
        alt="Marcha Feminista"
        className="imagen"
      />
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Registro</h1>
          <label className="checkbox">
            <input type="checkbox" onChange={handleCheckboxChange} checked={isWorker} />
            Soy trabajador
          </label>
          {isWorker && (
            <div className="input-box">
              <input
                type="text"
                placeholder="ID Trabajador"
                name="idTrabajador"
                value={formData.idTrabajador}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-box">
            <input
              type="email"
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
          <button type="submit">Registrarse</button>
          <div className="register-link">
            <p>
              ¿Ya tienes una cuenta?
              <a href="/login" className="link">
                Iniciar sesión
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
