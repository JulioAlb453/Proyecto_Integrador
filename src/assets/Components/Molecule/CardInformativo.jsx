import React from 'react';
import PropTypes from 'prop-types';
import ImageAtom from '../Atoms/ImageAtom'
import '../Styles/Molecule/CardInformativo.css'

//  Card para la info de programas,noticias, mision y vision
function CardInformativo({ imgSrc, imgAlt, description }) {
  return (
    <div className="program">
      <div className="image-container">
        <ImageAtom src={imgSrc} alt={imgAlt} />
      </div>
      <div className="description-container">
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
}

CardInformativo.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardInformativo;
