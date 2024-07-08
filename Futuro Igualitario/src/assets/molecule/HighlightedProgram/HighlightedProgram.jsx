import React from 'react';

function HighlightedProgram({ imgSrc, imgAlt, description }) {
  return (
    <div className="seccion2">
      <div className="image2">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="contenido2">
        <div className="descripcion2">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HighlightedProgram;
