// src/components/Atoms/Message.js
import React from 'react';
import '../Styles/Atoms/Message.css'


function Message({ text, type }) {
  return (
    <p className={`message ${type}`}>
      {text}
    </p>
  );
}

export default Message;
