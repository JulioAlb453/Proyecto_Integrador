// src/Atoms/EventItem.js
import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Atoms/EventData.css'

const EventData = ({ title, date, location, description, imgSrc, imgAlt }) => (
  <div className="event-item">
  <div className="event-image-container">
    <img src={imgSrc} alt={imgAlt} className="event-image" />
  </div>
  <div className="event-content">
    <h2 className="event-title">{title}</h2>
    <p className="event-date">{date}</p>
    <p className="event-location">{location}</p>
    <p className="event-description">{description}</p>
  </div>
</div>
);

EventData.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default EventData;
