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
import '../Styles/Molecule/Navbar.css'

function AdminBar() {
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
          <Link to="/AdminPerfil" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faUser} className="nav__icon" />
            Perfil
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/verCitas" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBriefcase} className="nav__icon" />
            Ver citas
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/verDenuncias" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faExclamationCircle} className="nav__icon" />
            Ver denuncias
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Ver usuarios" className="nav__link" onClick={handleToggle}>
          <FontAwesomeIcon icon={faUser} className="nav__icon" />
            Ver usuarios
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/AdministrarEventos" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faCalendarAlt} className="nav__icon" />
            Ver eventos
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/verNoticias" className="nav__link" onClick={handleToggle}>
            <FontAwesomeIcon icon={faNewspaper} className="nav__icon" />
            Ver Noticias
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

export default AdminBar;
