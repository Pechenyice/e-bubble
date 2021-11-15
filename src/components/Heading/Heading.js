import React from 'react';
import './Heading.css';

function Heading({ text }) {
  return (
    <div className="heading">
      <h2>{text}</h2>
      <div className="heading__decorator"></div>
    </div>
  );
}

export default Heading;
