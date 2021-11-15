import React from 'react';
import IsometricHeading from './IsometricHeading';

function PersonalTextBox({ heading, text, style }) {
  return (
    <div className="textBox__wrapper textBox__isometricWrapper" style={style}>
      <IsometricHeading text={heading} />
      {text}
    </div>
  );
}

export default PersonalTextBox;
