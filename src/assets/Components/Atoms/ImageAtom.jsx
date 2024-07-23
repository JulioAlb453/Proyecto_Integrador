import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Atoms/ImageAtom.css'
//Atomo para agregar imagen
const ImageAtom = ({ src, alt}) => {
  return <img src={src} alt={alt}  />;
};

ImageAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,

};

export default ImageAtom;
