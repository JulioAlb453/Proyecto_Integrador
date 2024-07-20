import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Atoms/Paragraph.css'

const ParagraphAtom = ({ text, className = '' }) => {
  return <p className={className}>{text}</p>;
};

ParagraphAtom.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ParagraphAtom;
