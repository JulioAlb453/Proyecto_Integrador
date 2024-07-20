import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Atoms/Date.css'

const DateAtom = ({ date, className = '' }) => {
  return <time className={className}>{date}</time>;
};

DateAtom.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default DateAtom;
