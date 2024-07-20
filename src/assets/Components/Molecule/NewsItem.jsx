// src/molecules/NewsItem.js
import React from 'react';
import PropTypes from 'prop-types';
import ImageAtom from '../Atoms/ImageAtom';
import '../Styles/Molecule/NewsItem.css'

function NewsItem({ imgSrc, imgAlt, description }) {
  return (
    <div className="news-item">
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

NewsItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NewsItem;
