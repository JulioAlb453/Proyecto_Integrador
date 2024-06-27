import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="main-content">
        <div className="content">
          <div className="imagen">
            <img src="https://cdn.pixabay.com/photo/2012/04/24/16/58/seal-40435_640.png" alt="Seal of Mexico" />
          </div>
          <div className="seccion1">
            <div className="description">
              <p>Gobierno de México</p>
            </div>
            <div className="contacts">
              <p>Contactos</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
