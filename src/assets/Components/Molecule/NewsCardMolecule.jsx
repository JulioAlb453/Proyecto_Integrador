
import React from "react";
import PropTypes from "prop-types";
import TitleNews from "../Atoms/TitleNews";
import ParagraphAtom from "../Atoms/ParagraphAtom";
import ImageAtom from "../Atoms/ImageAtom";
import DateAtom from "../Atoms/DateAtom";
import "../Styles/Molecule/NewsCardMolecule.css";

const NewsCardMolecule = ({ title, text, imgSrc, imgAlt, date }) => {
  return (
    <div className="news-card">
      <div className="New-card-image">
        <ImageAtom src={imgSrc} alt={imgAlt} className="news-card-image" />
      </div>
      <div className="news-card-content">
        <div className="Title">
          <TitleNews title={title} className="news-card-title" />
        </div>
        <div className="Date">
          <DateAtom date={date} className="news-card-date" />
        </div>
        <div className="Text">
          <ParagraphAtom text={text} className="news-card-text" />
        </div>
      </div>
    </div>
  );
};

NewsCardMolecule.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsCardMolecule;
