// src/components/atoms/FooterLink.jsx
import React from 'react';
import PropTypes from 'prop-types';

function FooterLink({ href, children }) {
  return (
    <li className="footer-link">
      <a href={href}>{children}</a>
    </li>
  );
}

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterLink;
