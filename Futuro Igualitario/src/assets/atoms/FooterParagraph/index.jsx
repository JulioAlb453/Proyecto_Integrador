// src/components/atoms/FooterParagraph.jsx
import React from 'react';
import PropTypes from 'prop-types';

function FooterParagraph({ children }) {
  return <p className="footer-paragraph">{children}</p>;
}

FooterParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterParagraph;
