import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function PersonalSkillRating({ rating, name }) {
  return (
    <div className="isometric__skill">
      <div className="isometric__skillAnim" style={{ left: '-30px' }}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <p className="isometric__skillName">{name}</p>

      <div className="isometric__skillRatingWrapper">
        {[...Array(rating)].map((x, i) => (
          <div key={i} className="isometric__skillRating isometric__skillRating_active"></div>
        ))}
        {[...Array(5 - rating)].map((x, i) => (
          <div key={i} className="isometric__skillRating"></div>
        ))}
      </div>
      <div className="isometric__skillAnim" style={{ right: '-30px' }}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  );
}

export default PersonalSkillRating;
