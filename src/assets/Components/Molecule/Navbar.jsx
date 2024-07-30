import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faExclamationCircle,
  faInfoCircle,
  faCalendarAlt,
  faNewspaper,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Molecule/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    // Elimina los datos del localStorage
    localStorage.removeItem('token'); // Reemplaza 'token' con la clave que necesites eliminar
    // Puedes agregar más lógica aquí si es necesario
    setIsOpen(false); // Cierra el menú después de hacer logout
  };

  return (
    <nav className="nav">
      <div className="nav__left">
        <Link to="/home" className="nav__link" onClick={() => setIsOpen(false)}>
          <span className="nav__brand">Secretaría para la Igualdad de las Mujeres</span>
        </Link>
      </div>

      {/* Botón de hamburguesa para el menú */}
      <button
        className="nav__toggler"
        onClick={handleToggle}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      {/* Menú desplegable */}
      <ul
        ref={navRef}
        className={`nav__menu ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <li className="nav__item">
          <Link to="/Perfil" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faUser} className="nav__icon" />
            Perfil
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Servicios" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBriefcase} className="nav__icon" />
            Servicios
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/RegistroDenuncia" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faExclamationCircle} className="nav__icon" />
            Denuncias
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/SobreNosotros" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faInfoCircle} className="nav__icon" />
            Sobre Nosotros
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Eventos" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faCalendarAlt} className="nav__icon" />
            Eventos
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/SeccionNoticias" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faNewspaper} className="nav__icon" />
            Noticias
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/"
            className="nav__link"
            onClick={() => {
              handleLogout();
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="nav__icon" />
            Cerrar Sesión
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
