import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Page/errorPage.css';
import ButtonLink from '../Atoms/ButtonLink';

const ErrorPage = () => {
  return (
    <div className='container'>
      
      <h1>Error 403: Acceso denegado </h1>
      <FontAwesomeIcon icon={faTimesCircle} className="error-icon" />
      <p>No tienes permiso para acceder a esta página.</p>
      <ButtonLink text="Inicia sesión para acceder" to="/"/>
    </div>
  );
};

export default ErrorPage;
