import React from "react";
import InputWithIcon from "../InputWithIcon";
import ButtonAtom from "../../atoms/ButtonAtom";
import CheckboxAtom from "../../atoms/CheckboxAtom";

function LoginFormStandard({ onSubmit, onForgotPassword }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Inicio de sesión</h1>
      <div className="Input-email">
        <InputWithIcon
          type="text"
          placeholder="Correo electrónico"
          icon={<i className="icon-user" />}
          required
        />
      </div>

      <div className="InputPassword">
        <InputWithIcon
          type="password"
          placeholder="Contraseña"
          icon={<i className="icon-lock" />}
          required
        />
      </div>
      <div className="Remember">
        <CheckboxAtom label="Recuérdame" />
        <a href="#" onClick={onForgotPassword} className="link">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <div className="Button-access">
        <ButtonAtom type="submit" className="Button-login">
          Iniciar sesión
        </ButtonAtom>
      </div>
    </form>
  );
}

export default LoginFormStandard;
