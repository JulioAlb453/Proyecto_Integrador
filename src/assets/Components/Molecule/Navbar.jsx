import React, { useState } from "react";
import {Link } from "react-router-dom";
import "./Navbar.css"; // Asegúrate de tener tu archivo CSS importado

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <Link id="link" to={"/"} className="nav__brand">
        Home
      </Link>
      <div className="nav__toggler" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav__Menu ${isOpen ? "open" : ""}`}>
        <li className="nav__Item">
          <Link id="link" to="/login" className="nav__Link" onClick={handleToggle}>
            Login
          </Link>
        </li>
        <li className="nav__Item">
          <Link id="link" to="/Perfil" className="nav__Link" onClick={handleToggle}>
            Perfil
          </Link>
        </li>
        <li className="nav__Item">
          <Link id="link" to='/adminTable' className="nav__Link" onClick={handleToggle}>
            tabla admin
          </Link>
        </li>
        <li className="nav__Item">
          <Link id="link" to="/registrar" className="nav__Link" onClick={handleToggle}>
           registrar
          </Link>
        </li>
        <li className="nav__Item">
          <Link id="link" to="/SeccionNoticias" className="nav__Link" onClick={handleToggle}>
            Noticias
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
