
import React from 'react';
import PropTypes from 'prop-types';
import './NewsSectionOrganism.css';
import NewsCardMolecule from '../Molecule/NewsCardMolecule';
const NewsSectionOrganism = ({ newsItems }) => {
  return (
    <div className="news-section">
      {newsItems.map((newsItem, index) => (
        <NewsCardMolecule
          key={index}
          title={newsItem.title}
          text={newsItem.text}
          imgSrc={newsItem.imgSrc}
          imgAlt={newsItem.imgAlt}
          date={newsItem.date}
        />
      ))}
    </div>
  );
};

NewsSectionOrganism.propTypes = {
  newsItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      imgAlt: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
};

export default NewsSectionOrganism;
