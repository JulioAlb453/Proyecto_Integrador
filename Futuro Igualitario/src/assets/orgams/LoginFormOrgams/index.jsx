import React, { useState } from "react";
import LoginFormStandard from "../../molecule/LoginFormStandard";
import LoginFormAdmin from "../../molecule/LoginFormAdmin";

function LoginFormOrgams() {
  const [adminMode, setAdminMode] = useState(false);

  const handleAdminLogin = () => {
    // Implementar lógica de inicio de sesión como administrador aquí
    console.log("Iniciando sesión como administrador...");
  };

  const handleForgotPassword = () => {
    // Implementar lógica para restablecer contraseña aquí
    console.log("Olvidaste tu contraseña...");
  };

  const toggleAdminMode = () => {
    setAdminMode(!adminMode);
  };

  return (
    <section className="container-login">
      <div className="image-wrapper">
        <img
          src="https://www.nvinoticias.com/sites/default/files/styles/medium/public/articulos/2024/Mar/marcha-feminista-oaxaca6.jpg.webp?itok=R94gpTZc"
          alt="Marcha Feminista"
          className="imagen"
        />
      </div>
      <div className="wrapper">
        <div className="form-wrapper">
          {adminMode ? (
            <LoginFormAdmin onSubmit={handleAdminLogin} />
          ) : (
            <LoginFormStandard
              onSubmit={() => {}}
              onForgotPassword={handleForgotPassword}
            />
          )}
          <div className="admin-mode">
            <label>
              <input
                type="checkbox"
                checked={adminMode}
                onChange={toggleAdminMode}
              />
              Iniciar sesión como administrador
            </label>
          </div>
          <div className="register-link">
            <p>
              ¿No tienes una cuenta?{" "}
              <a href="/registrar" className="link">
                Regístrate!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginFormOrgams;
