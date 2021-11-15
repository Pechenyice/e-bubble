import React from 'react';
import HintOption from './HintOption';
import {
  faCss3Alt,
  faFigma,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faAtom, faDatabase } from '@fortawesome/free-solid-svg-icons';

function HintsList({ dreams, onHover, onLeave }) {
  return (
    <div className="isometricTextBox__list">
      <HintOption
        dreams={dreams}
        icon={faJsSquare}
        name="JavaScript"
        color="#F0DB4F"
        onHover={onHover}
        onLeave={onLeave}
      />

      <HintOption
        dreams={dreams}
        icon={faReact}
        name="React"
        color="#61DBFB"
        onHover={onHover}
        onLeave={onLeave}
      />

      <HintOption
        dreams={dreams}
        icon={faNodeJs}
        name="Node.js"
        color="#3C873A"
        onHover={onHover}
        onLeave={onLeave}
      />

      <HintOption
        dreams={dreams}
        icon={faHtml5}
        addIcon={faCss3Alt}
        name="HTML+CSS"
        color="#F06529"
        addColor="#2965F1"
        onHover={onHover}
        onLeave={onLeave}
      />

      <HintOption
        dreams={dreams}
        icon={faAtom}
        name="Electron.js"
        color="#9FEAF9"
        onHover={onHover}
        onLeave={onLeave}
      />

      <HintOption
        dreams={dreams}
        icon={faGitAlt}
        name="Git"
        color="#F1502F"
        onHover={onHover}
        onLeave={onLeave}
      />

      <HintOption
        dreams={dreams}
        icon={faDatabase}
        name="SQL/NoSQL"
        color="#00758F"
        onHover={onHover}
        onLeave={onLeave}
      />

      <HintOption
        dreams={dreams}
        icon={faFigma}
        name="Figma"
        color="#FF7765"
        onHover={onHover}
        onLeave={onLeave}
      />
    </div>
  );
}

export default HintsList;
