import React from "react";
import { CiLock } from "react-icons/ci";
import { SlUserFemale } from "react-icons/sl";

import "./LoginForm.css";

function LoginForm() {
  return (
    <section className="container-login">
      <img
        src="https://www.nvinoticias.com/sites/default/files/styles/medium/public/articulos/2024/Mar/marcha-feminista-oaxaca6.jpg.webp?itok=R94gpTZc"
        alt="Marcha Feminista"
        className="imagen"
      />

      <div className="wrapper">
        <form action="">
          <h1>Inicio de sesion</h1>
          <div className="input-box">
            <input type="text" placeholder="Id usuario" required />
            <SlUserFemale className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required />
            <CiLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              recuerdame
            </label>
            <a href="#" className="link">
              ¿Olvidate tu contraseña?
            </a>
          </div>

          <button type="submit">Iniciar sesion</button>

          <div className="register-link">
            <p>
              ¿No tienes una cuenta?{" "}
              <a href="#" className="link">
                Registrate!
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
