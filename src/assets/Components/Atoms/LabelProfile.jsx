import React from 'react';
import '../Styles/Atoms/Label.css'


function LabelProfile({ text, strong }) {
  return <p><strong>{strong}:</strong> {text}</p>;
}

export default LabelProfile