import React from 'react';
import PropTypes from 'prop-types';

const TitleAtom = ({ title, className = '' }) => {
  return <h2 className={className}>{title}</h2>;
};

TitleAtom.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TitleAtom;
