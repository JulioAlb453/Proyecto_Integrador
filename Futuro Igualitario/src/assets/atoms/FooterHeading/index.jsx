// src/components/atoms/FooterHeading.jsx
import React from 'react';
import PropTypes from 'prop-types';

function FooterHeading({ children }) {
  return <h3 className="footer-heading">{children}</h3>;
}

FooterHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterHeading;
