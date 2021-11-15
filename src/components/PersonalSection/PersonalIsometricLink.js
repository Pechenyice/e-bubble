import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PersonalIsometricLink({
  icon,
  name,
  textColor = '#242424',
  color = 'white',
  borderColor = 'grey',
  href,
}) {
  return (
    <div className="isometric__link">
      <a target="_blank" href={href}>
        <div
          className="isometric__content"
          style={{ backgroundColor: color, '--pseudoColor': borderColor }}
        >
          <FontAwesomeIcon icon={icon} style={{ color: textColor }} />
        </div>
        <p className="isometric__linkName" style={{ '--pseudoColor': color }}>
          {name}
        </p>
      </a>
    </div>
  );
}

export default PersonalIsometricLink;
