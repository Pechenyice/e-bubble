import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faTabletAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ProjectsProjectCard({ name, type, active, onProjectClick }) {
  function initCardByType() {
    switch (type) {
      case 'Website': {
        return { icon: faInternetExplorer, type: type };
      }
      case 'Desktop': {
        return { icon: faDesktop, type: type };
      }
      case 'Service': {
        return { icon: faUsers, type: type };
      }
      case 'Mobile app': {
        return { icon: faTabletAlt, type: type };
      }
    }
  }

  let classes = ['projectsList__project'];

  if (active) classes.push('projectsList__project_active');

  function handleClick() {
    onProjectClick(name);
  }

  return (
    <div className={classes.join(' ')} onClick={handleClick}>
      <h3 className="projectsList__projectName">{name}</h3>
      <FontAwesomeIcon
        className="projectsList__projectIcon"
        icon={initCardByType().icon}
      ></FontAwesomeIcon>
      <p className="projectsList__projectType">{initCardByType().type}</p>
    </div>
  );
}

export default ProjectsProjectCard;
