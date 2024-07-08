import React from 'react';

function NewsSection({ imgSrc, imgAlt, description }) {
  return (
    <div className="noticia-seccion3">
      <div className="seccion2">
        <div className="image2">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="contenido2">
          <div className="noticia_descripcion2">
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
