import React from "react";
import DoughnutOption from "./DoughnutOption";
import { faCss3Alt, faFigma, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAtom, faDatabase } from "@fortawesome/free-solid-svg-icons";

function DoughnutList({onHover, onLeave}) {

    return (
        <div>

            <DoughnutOption
                icon={faJsSquare}
                name='JavaScript'
                color='#F0DB4F'
                style={{
                    top: '-80px',
                    left: 'calc(50% - 50px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                icon={faReact}
                name='React'
                color='#61DBFB'
                style={{
                    top: '-25px',
                    left: 'calc(100% - 55px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                icon={faNodeJs}
                name='Node.js'
                color='#3C873A'
                style={{
                    top: '125px',
                    left: 'calc(100%)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                icon={faHtml5}
                addIcon={faCss3Alt}
                name='HTML+CSS'
                color='#F06529'
                addColor='#2965F1'
                style={{
                    bottom: '-25px',
                    left: 'calc(100% - 55px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                icon={faAtom}
                name='Electron.js'
                color='#9FEAF9'
                style={{
                    bottom: '-85px',
                    left: 'calc(50% - 50px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                icon={faGitAlt}
                name='Git'
                color='#F1502F'
                style={{
                    top: '-25px',
                    right: 'calc(100% - 55px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                icon={faDatabase}
                name='SQL/NoSQL'
                color='#00758F'
                style={{
                    top: '125px',
                    right: 'calc(100%)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

            <DoughnutOption
                icon={faFigma}
                name='Figma'
                color='#FF7765'
                style={{
                    bottom: '-25px',
                    right: 'calc(100% - 55px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

        </div>
    );

}

export default DoughnutList;