import React from "react";
import InputWithIcon from "../InputWithIcon";
import ButtonAtom from "../../atoms/ButtonAtom";

function LoginFormAdmin({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Iniciar sesión como administrador</h1>
    <div className="Input-Id">

      <InputWithIcon
        type="text"
        placeholder="ID de Trabajador"
        icon={<i className="icon-user" />}
        required
      />
    </div>
    <div className="Input-email">
      <InputWithIcon
        type="text"
        placeholder="Correo electrónico"
        icon={<i className="icon-mail" />}
        required
      />

    </div>
    <div className="Input-password">
      <InputWithIcon
        type="password"
        placeholder="Contraseña"
        icon={<i className="icon-lock" />}
        required
      />
    </div>
    <div className="Button-admin">

      <ButtonAtom type="submit">Iniciar sesión como administrador</ButtonAtom>
    </div>
    </form>
  );
}

export default LoginFormAdmin;
