import React, { useEffect, useState } from "react";
import './ProjectsSection.css';
import ProjectsProjectCard from "./ProjectsProjectCard";
import { Chart, registerables } from 'chart.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProjectsTech from "./ProjectsTech";

Chart.register(...registerables);

function ProjectsSection() {

    // useEffect(() => {
    //     let ctx = document.getElementById('myChart');

    //     const data = {
    //     labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    //     datasets: [
    //         {
    //             label: 'Dataset 1',
    //             data: [5, 4, 5, 10, 2],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             hoverOffset: 5
    //         }
    //     ]
    //     };

    //     const config = {
    //         type: 'pie',
    //         data: data,
    //         options: {
    //             scaleFontColor: "#FFFFFF",
    //             responsive: false,
    //             events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    //           plugins: {
    //             legend: {
    //               position: 'top', 
    //               font: {
    //                     size: 18,
    //                     family: 'Teko'
    //                 }
    //             },
    //             title: {
    //               display: true,
    //               text: 'Technologies'
    //             }
    //           },
    //         },
    //     };

    //     let myChart = new Chart(ctx, config);
        
    // }, []);

    let [projects, setProjects] = useState({
        list: [
            {
                active: true,
                name: 'VK Helper',
                type: 'Website',
                status: 'Development',
                briefly: 'VK bot to automate your social network expirience',
                graph: [
                    {
                        name: 'JS',
                        percent: 65,
                        color: '#E8FC04'
                    },
                    {
                        name: 'HTML',
                        percent: 12,
                        color: '#F06529'
                    },
                    {
                        name: 'CSS',
                        percent: 23,
                        color: '#2965f1'
                    }
                ]
            },
            {
                active: false,
                name: 'Audio Player',
                type: 'Website',
                status: 'Deploy',
                briefly: 'Commercial player with powerful tune',
                graph: [
                    {
                        name: 'PHP',
                        percent: 5,
                        color: '#8993be'
                    },
                    {
                        name: 'JS',
                        percent: 60,
                        color: '#E8FC04'
                    },
                    {
                        name: 'HTML',
                        percent: 10,
                        color: '#F06529'
                    },
                    {
                        name: 'CSS',
                        percent: 25,
                        color: '#2965f1'
                    }
                ]
            },
            {
                active: false,
                name: 'PC Prebuilder',
                type: 'Desktop',
                status: 'Predeploy',
                briefly: 'Desktop app for creating pc configuration presets',
                graph: [
                    {
                        name: 'JS',
                        percent: 47,
                        color: '#E8FC04'
                    },
                    {
                        name: 'HTML',
                        percent: 11,
                        color: '#F06529'
                    },
                    {
                        name: 'CSS',
                        percent: 42,
                        color: '#2965f1'
                    }
                ]
            },
            {
                active: false,
                name: 'ITMO Landing',
                type: 'Website',
                status: 'Deploy',
                briefly: 'Landing for university competition',
                graph: [
                    {
                        name: 'JS',
                        percent: 48,
                        color: '#E8FC04'
                    },
                    {
                        name: 'HTML',
                        percent: 23,
                        color: '#F06529'
                    },
                    {
                        name: 'CSS',
                        percent: 29,
                        color: '#2965f1'
                    }
                ]
            },
            {
                active: false,
                name: 'ITMO App',
                type: 'Mobile app',
                status: 'Deploy',
                briefly: 'App to help students with their education activity',
                graph: [
                    {
                        name: 'Java',
                        percent: 100,
                        color: '#f89820'
                    }
                ]
            },
            {
                active: false,
                name: 'Fapay',
                type: 'Service',
                status: 'Development',
                briefly: 'Web Service for holding in-game tournaments',
                graph: [
                    {
                        name: 'JS',
                        percent: 36,
                        color: '#E8FC04'
                    },
                    {
                        name: 'HTML',
                        percent: 39,
                        color: '#F06529'
                    },
                    {
                        name: 'CSS',
                        percent: 12,
                        color: '#2965f1'
                    },
                    {
                        name: 'Go',
                        percent: 13,
                        color: '#29BEB0'
                    }
                ]
            }
        ]
    });

    function handleProjectClick(name) {
        for (let p of projects.list) {
            if (p.name == name) {
                if (p.active) return;
            }
        }

        let newProjects = projects.list.map(p => {
            let tmp;
            if (p.name == name) {
                tmp = Object.assign({}, p, {active: true});
            } else {
                tmp = Object.assign({}, p, {active: false});
            }
            return tmp;
        });

        setProjects({list: newProjects});
    }

    return (
        <div style={{position: 'absolute', top: 0, left: 0, perspective: '10000px', width: '100%', pointerEvents: 'none'}}>
        <div className='app__projectsWrapper' style={{transform: 'translateX(150vw) translateY(150vh) translateZ(-10000px)', transition: '1s'}}>
        <section className='app__projects projects' >

            <div className='projects__wrapper'>

                <div className='projectsList__blockName'>Last projects</div>

                <div className="projects__projectsList projectsList">

                    {
                        projects.list.map((p, i) => <ProjectsProjectCard key={i} active={p.active} name={p.name} type={p.type} onProjectClick={handleProjectClick}/>)
                    }

                    {/* <ProjectsProjectCard name={'VK Helper'} type={'Website'}/>
                    <ProjectsProjectCard name={'Audio Player'} type={'Website'}/>
                    <ProjectsProjectCard name={'PC Prebuilder'} type={'Desktop'}/>
                    <ProjectsProjectCard name={'ITMO Landing'} type={'Website'}/>
                    <ProjectsProjectCard name={'ITMO App'} type={'Mobile app'}/>
                    <ProjectsProjectCard name={'Fapay'} type={'Servis'}/> */}
                </div>

                <div className='projects__projectContent'>

                    <div className='projects__projectInfo'>

                        <div>
                            <div className='projects__projectStatus projectStatus'>
                                <div className='projectStatus__text'>[STATUS]<br/>
                                {   
                                    projects.list.map(p => {
                                        return p.active ? p.status : null;  
                                    })
                                }
                                </div>
                                <div className='projectStatus__text projectStatus__text_large'>[BRIEFLY]<br/>
                                {   
                                    projects.list.map(p => {
                                        return p.active ? p.briefly : null;  
                                    })
                                }
                                </div>
                            </div>

                            <div className='projects__projectTechs projectTechs'>
                                {   
                                    projects.list.map(p => {
                                        if (p.active) {
                                            return p.graph.map((g, j) => <ProjectsTech key={j} name={g.name} percent={g.percent} color={g.color}/>)
                                        }
                                    })
                                }
                                {/* <div className='projectTechs__tech'>
                                    <div className='projectTechs__techBar'></div>
                                    <div className='projectTechs__techName'>JS</div>
                                    <div className='projectTechs__techPercent'>75%</div>
                                </div>

                                <div className='projectTechs__tech'>
                                    <div className='projectTechs__techBar'></div>
                                    <div className='projectTechs__techName'>CSS</div>
                                    <div className='projectTechs__techPercent'>15%</div>
                                </div> */}

                                
                            </div>
                        </div>

                        <div className='projects__projectGallery'>
                            <img src='./e-bubble/assets/test.png' />
                            <div className='projects__projectsGalleryControllerWrapper'>
                                <div className='projects__projectsGalleryController'><FontAwesomeIcon icon={faChevronLeft} /></div>
                                <div className='projects__projectsGalleryController'><FontAwesomeIcon icon={faChevronRight} /></div>
                            </div>
                        </div>

                        

                    </div>

                    {/* <div className='projects__projectChartWrapper'>

                        <div className='projects__projectChart'>
                            <canvas id="myChart" width="700" height="250"></canvas>
                        </div>
                        
                        <div className='projects__projectChartPlatform'></div>

                    </div> */}

                    

                </div>

                {/* <div className='projects__cube'>

                    <div className='cube__top'>top</div>

                    <div className='cube__right'></div>

                    <div className='cube__left'></div>

                </div> */}

            </div>

        </section>
        </div>
        </div>
    );

}

export default ProjectsSection;