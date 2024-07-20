// src/components/molecules/FooterSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import FooterHeading from '../../atoms/FooterHeading';
import FooterParagraph from '../../atoms/FooterParagraph';
import FooterLink from '../../atoms/FooterLink';

function FooterSection({ title, content }) {
  return (
    <div className="footer-section">
      <FooterHeading>{title}</FooterHeading>
      {typeof content === 'string' ? (
        <FooterParagraph>{content}</FooterParagraph>
      ) : (
        <ul>
          {content.map((link, index) => (
            <FooterLink key={index} href={link.href}>
              {link.text}
            </FooterLink>
          ))}
        </ul>
      )}
    </div>
  );
}

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
  ]).isRequired,
};

export default FooterSection;
