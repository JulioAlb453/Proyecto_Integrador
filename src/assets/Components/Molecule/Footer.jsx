import React from 'react';
import '../Styles/Molecule/footer.css'
// Componente de Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Agregar el logo de la bandera de México */}
        <div className="footer-logo">
          <img src="src\assets\img\logo_Ayuntamiento.png" alt="Bandera de México" />
        </div>
        {/* Secciones del footer */}
        <div className="footer-sections">
          {/* Sección de Gobierno de México */}
          <div className="footer-section">
            <h3>Tuxtla Gutierrez</h3>
            <p>Ayuntamiento | 2021 - 2024</p>
          </div>
          {/* Sección de Contactos */}
          <div className="footer-section">
            <h3>Contactos</h3>
            <ul>
              <li><a href="mailto:contacto@gob.mx">SecretariaPIM@gob.mx</a></li>
              <li><a href="tel:+520000000000">+9616125511</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
