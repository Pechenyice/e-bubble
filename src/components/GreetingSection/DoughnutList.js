import React from "react";
import DoughnutOption from "./DoughnutOption";
import { faCss3Alt, faFigma, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAtom, faDatabase } from "@fortawesome/free-solid-svg-icons";

function DoughnutList({dreams, onHover, onLeave}) {

    return (
        <div className='doughnut__headingAnimation doughnut__headingAnimation_8'>

            <DoughnutOption
                dreams={dreams}
                icon={faJsSquare}
                name='JavaScript'
                color='#F0DB4F'
                style={{
                    top: '-60px',
                    left: 'calc(50% - 50px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                dreams={dreams}
                icon={faReact}
                name='React'
                color='#61DBFB'
                style={{
                    top: '30px',
                    left: 'calc(100% - 90px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                dreams={dreams}
                icon={faNodeJs}
                name='Node.js'
                color='#3C873A'
                style={{
                    top: '260px',
                    left: 'calc(99%)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                dreams={dreams}
                icon={faHtml5}
                addIcon={faCss3Alt}
                name='HTML+CSS'
                color='#F06529'
                addColor='#2965F1'
                style={{
                    bottom: '20px',
                    left: 'calc(100% - 80px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                dreams={dreams}
                icon={faAtom}
                name='Electron.js'
                color='#9FEAF9'
                style={{
                    bottom: '-60px',
                    left: 'calc(50% - 50px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                dreams={dreams}
                icon={faGitAlt}
                name='Git'
                color='#F1502F'
                style={{
                    top: '30px',
                    right: 'calc(100% - 90px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                dreams={dreams}
                icon={faDatabase}
                name='SQL/NoSQL'
                color='#00758F'
                style={{
                    top: '260px',
                    right: 'calc(99%)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                dreams={dreams}
                icon={faFigma}
                name='Figma'
                color='#FF7765'
                style={{
                    bottom: '10px',
                    right: 'calc(100% - 100px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

        </div>
    );

}

export default DoughnutList;