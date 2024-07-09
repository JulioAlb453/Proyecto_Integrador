import React from "react";
import PropTypes from "prop-types";
import './MissionSection.css'

function MissionSection({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="seccion-mision">
      <div className="image-mission">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="descripcion-mission">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

MissionSection.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionSection;
