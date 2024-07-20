
import React from 'react';
import FooterLogo from '../../atoms/FooterLogo';
import FooterSection from '../../molecule/FooterSection';
import './FooterOrganism.css';

function FooterOrganism() {
  const contactLinks = [
    { href: 'mailto:contacto@gob.mx', text: 'contacto@gob.mx' },
    { href: 'tel:+520000000000', text: '+52 000 000 0000' },
    { href: '/contacto', text: 'Formulario de contacto' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
      <div className='Footer-logo'>
        <FooterLogo
          src="https://cdn.pixabay.com/photo/2012/04/24/16/58/seal-40435_640.png"
          alt="Seal of Mexico"
        />

      </div>
        <div className="footer-sections">
          <FooterSection
            title="Gobierno de México"
            content="Información oficial sobre el gobierno de México."
          />
          <FooterSection title="Contactos" content={contactLinks} />
        </div>
      </div>
    </footer>
  );
}

export default FooterOrganism;
