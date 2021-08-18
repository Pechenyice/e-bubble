import React from "react";

function ProjectsTech({name, percent, color}) {

    return (
        <div className='projectTechs__tech'>
            <div className='projectTechs__techBar' style={{height: percent + '%', background: color, '--tech-background': color}}></div>
            <div className='projectTechs__techName'>{name}</div>
            <div className='projectTechs__techPercent'>{percent}%</div>
        </div>
    );

}

export default ProjectsTech;