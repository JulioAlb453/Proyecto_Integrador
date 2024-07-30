import React from 'react';

const TextDisplay = ({ value, placeholder }) => (
  <span style={{ display: 'inline-block', padding: '4px', borderRadius: '4px', backgroundColor: '#f0f0f0' }}>
    {value || placeholder}
  </span>
);

export default TextDisplay;
