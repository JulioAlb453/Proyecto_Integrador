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
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__left">
        <Link to="/" className="nav__link" onClick={() => setIsOpen(false)}>
          <span className="nav__brand">Secretaría de Igualdad de la Mujer</span>
        </Link>
      </div>  

      {/* Botón de hamburguesa para el menú */}
      <div className="nav__toggler" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menú desplegable */}
      <ul ref={navRef} className={`nav__menu ${isOpen ? "open" : ""}`}>
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
          <Link
            to="/sobre-nosotros"
            className="nav__link"
            onClick={handleToggle}
          >
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
            to="/login"
            className="nav__link"
            onClick={handleToggle}
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
