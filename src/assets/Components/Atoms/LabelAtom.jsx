import React from 'react';


const LabelAtom = ({ htmlFor, text }) => (
  <label className="label" htmlFor={htmlFor}>
    {text}
  </label>
);

export default LabelAtom;
