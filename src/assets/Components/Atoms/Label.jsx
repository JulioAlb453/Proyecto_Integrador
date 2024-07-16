import React from 'react';

function Label({ text, strong }) {
  return <p><strong>{strong}:</strong> {text}</p>;
}

export default Label