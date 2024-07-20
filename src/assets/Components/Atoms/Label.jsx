import React from 'react';
import '../Styles/Atoms/Label.css'

function Label({ text, strong }) {
  return <p><strong>{strong}:</strong> {text}</p>;
}

export default Label