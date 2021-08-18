import React, { useEffect, useRef } from "react";

function ProjectsTech({name, percent, color}) {

    let myTech = useRef(null);

    useEffect(() => {
        setTimeout(() => {myTech.current.style.height = percent + '%'}, 0);
    }, []);

    return (
        <div className='projectTechs__tech projectTechs__tech_active'>
            <div className='projectTechs__techBar' ref={myTech} style={{height: 0 + '%', background: color, '--tech-background': color}}></div>
            <div className='projectTechs__techName'>{name}</div>
            <div className='projectTechs__techPercent'>{percent}%</div>
        </div>
    );

}

export default ProjectsTech;