import React from 'react';

function PersonalIsometricSkills({ theme, list }) {
  return (
    <div className="textBox__isometric isometric">
      <div className="textBox__isometricWrapper">
        <div className="isometric__skillBox">
          <h2 className="isometric__frontPlane">{theme}</h2>
        </div>

        {list}
      </div>
    </div>
  );
}

export default PersonalIsometricSkills;
