// NotFoundPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import ButtonLink from '../Atoms/ButtonLink';
import '../Styles/Page/errorPage.css'; // Puedes reutilizar el CSS de ErrorPage si quieres

const NotFoundPage = () => {
  return (
    <div className='container'>
      <h1>404: Página no encontrada</h1>
      <FontAwesomeIcon icon={faTimesCircle} className="error-icon" />
      <p>La página que estás buscando no existe.</p>
      <ButtonLink text="Inicia sesión" to="/"/>
      <p>o</p>
      <ButtonLink text="Ve al menu principal" to="/home"/>
    </div>
  );
};

export default NotFoundPage;
