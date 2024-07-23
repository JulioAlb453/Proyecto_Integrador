import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Atoms/Title.css';

// Átomo para los títulos
const TitleAtom = ({ text, className = '' }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          titleRef.current.classList.add('visible');
        } else {
          titleRef.current.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar la función una vez para verificar el estado inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={titleRef} className={`title ${className}`}>{text}</div>;
};

TitleAtom.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TitleAtom;
