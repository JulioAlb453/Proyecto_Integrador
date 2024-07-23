import React from 'react';
import '../Styles/Molecule/footer.css'
// Componente de Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Agregar el logo de la bandera de México */}
        <div className="footer-logo">
          <img src="https://cdn.pixabay.com/photo/2012/04/24/16/58/seal-40435_640.png" alt="Bandera de México" />
        </div>
        {/* Secciones del footer */}
        <div className="footer-sections">
          {/* Sección de Gobierno de México */}
          <div className="footer-section">
            <h3>Gobierno de México</h3>
            <p>Información oficial sobre el gobierno de México.</p>
          </div>
          {/* Sección de Contactos */}
          <div className="footer-section">
            <h3>Contactos</h3>
            <ul>
              <li><a href="mailto:contacto@gob.mx">contacto@gob.mx</a></li>
              <li><a href="tel:+520000000000">+52 000 000 0000</a></li>
              <li><a href="/contacto">Formulario de contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
