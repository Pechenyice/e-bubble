import React from "react";
import './ProjectsSection.css';

function ProjectsSection() {

    return (
        <div style={{position: 'absolute', top: 0, left: 0, perspective: '10000px', width: '100%', pointerEvents: 'none'}}>
        <div className='app__projectsWrapper' style={{transform: 'translateX(150vw) translateY(150vh) translateZ(-10000px)', transition: '1s'}}>
        <section className='app__projects projects' >

            <div className='projects__cube'>

                <div className='cube__top'>top</div>

                <div className='cube__right'></div>

                <div className='cube__left'></div>

            </div>

        </section>
        </div>
        </div>
    );

}

export default ProjectsSection;