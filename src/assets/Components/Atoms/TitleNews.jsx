import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Atoms/TitleNews.css'; // Asegúrate de que la ruta sea correcta

const TitleNews = ({ title, className }) => {
  console.log(title)
  return <h2 className={className}>{title}</h2>;
};

TitleNews.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TitleNews;
