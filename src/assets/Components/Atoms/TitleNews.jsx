import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Atoms/Title.css'
const TitleNews = ({ title, className = '' }) => {
  return <h1 className={`title ${className}`}>{title}</h1>;
};

TitleNews.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TitleNews;
