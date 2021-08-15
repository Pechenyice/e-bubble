import React from "react";
import DoughnutOption from "./DoughnutOption";
import { faCss3Alt, faFigma, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAtom, faDatabase } from "@fortawesome/free-solid-svg-icons";

function DoughnutList({dreams, onHover, onLeave}) {

    return (
        <div>

            <DoughnutOption
                dreams={dreams}
                icon={faJsSquare}
                name='JavaScript'
                color='#F0DB4F'
                style={{
                    top: '-110px',
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
                    top: '-10px',
                    left: 'calc(100% - 60px)'
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
                    top: '235px',
                    left: 'calc(105%)'
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
                    bottom: '-20px',
                    left: 'calc(100% - 60px)'
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
                    bottom: '-110px',
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
                    top: '-10px',
                    right: 'calc(100% - 60px)'
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
                    top: '235px',
                    right: 'calc(105%)'
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
                    bottom: '-20px',
                    right: 'calc(100% - 60px)'
                }}
                onHover={onHover}
                onLeave={onLeave}
            />

        </div>
    );

}

export default DoughnutList;