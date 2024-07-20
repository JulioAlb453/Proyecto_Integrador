import React from "react";
import PropTypes from "prop-types";
import '../MissionSection/MissionSection.css'

function VisionSection({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="seccion-vision">
      <div className="image-vision">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="descripcion-vision">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

VisionSection.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default VisionSection;
