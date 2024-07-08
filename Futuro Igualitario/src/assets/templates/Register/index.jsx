import React from "react";
import { CiLock } from "react-icons/ci";
import { SlUserFemale } from "react-icons/sl";
import './Register.css'

function LoginForm() {
  
  return (
    <section className="container-register">
      <img
        src="https://www.nvinoticias.com/sites/default/files/styles/medium/public/articulos/2024/Mar/marcha-feminista-oaxaca6.jpg.webp?itok=R94gpTZc"
        alt="Marcha Feminista"
        className="imagen"
      />

      <div className="wrapper">
        <form action="">
          <h1>Registro </h1>
          <div className="input-box">
            <input type="text" placeholder="Correo electronico" required  />
            <SlUserFemale className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required />
            <CiLock className="icon" />
          </div>
          <button type="submit">Iniciar sesion</button>

          <div className="register-link">
            <p>
              ¿Ya tienes una cuenta?
              <a href="/login" className="link">
                Iniciar sesion
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
