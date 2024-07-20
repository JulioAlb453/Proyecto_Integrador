import React from 'react';
import Title from '../../atoms/Title';
import Paragraph from '../../atoms/Paragraph';
import './SectionContent.css';

function SectionContent({ title, content, imgSrc }) {
  return (
    <div className="section-content">
      <div className='Image'>
        <img src={imgSrc} alt={imgSrc}></img>
      </div>
      <Title text={title} />
      {content.map((text, index) => (
        <Paragraph key={index} text={text} />
      ))}
    </div>
  );
}

export default SectionContent;
