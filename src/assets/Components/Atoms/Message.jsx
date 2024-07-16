// src/components/Atoms/Message.js
import React from 'react';


function Message({ text, type }) {
  return (
    <p className={`message ${type}`}>
      {text}
    </p>
  );
}

export default Message;
