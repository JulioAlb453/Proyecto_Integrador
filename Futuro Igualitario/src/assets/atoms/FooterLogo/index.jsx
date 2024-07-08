// src/components/atoms/FooterLogo.jsx
import React from 'react';
import PropTypes from 'prop-types';

function FooterLogo({ src, alt }) {
  return <img src={src} alt={alt} className="footer-logo" />;
}

FooterLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FooterLogo;
