import React, { useEffect, useRef, useState } from "react";
import './ProjectsSection.css';
import ProjectsProjectCard from "./ProjectsProjectCard";
import { Chart, registerables } from 'chart.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProjectsTech from "./ProjectsTech";
import { faGithub, faGooglePlay, faInternetExplorer } from "@fortawesome/free-brands-svg-icons";

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
                active: false,
                name: 'VK Helper',
                type: 'Website',
                status: 'Development',
                briefly: 'VK bot to automate social nets expirience',
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
                ],
                img: {
                    path: '/e-bubble/assets/vkHelper/',
                    active: 0,
                    content: ['0.png']
                },
                link: {
                    href: '#',
                    icon: faGithub
                }
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
                ],
                img: {
                    path: '/e-bubble/assets/audioPlayer/',
                    active: 0,
                    content: ['0.png']
                },
                link: {
                    href: '#',
                    icon: faInternetExplorer
                }
            },
            {
                active: true,
                name: 'PC Prebuilder',
                type: 'Desktop',
                status: 'Predeploy',
                briefly: 'Desktop for making pc config presets',
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
                ],
                img: {
                    path: '/e-bubble/assets/pcPrebuilder/',
                    active: 0,
                    content: ['0.png']
                },
                link: {
                    href: '#',
                    icon: faGithub
                }
            },
            {
                active: false,
                name: 'ITMO App',
                type: 'Mobile app',
                status: 'Deploy',
                briefly: 'App to help students with their education',
                graph: [
                    {
                        name: 'Java',
                        percent: 100,
                        color: '#f89820'
                    }
                ],
                img: {
                    path: '/e-bubble/assets/itmoApp/',
                    active: 0,
                    content: ['0.png', '1.png', '2.png', '3.png', '4.png']
                },
                link: {
                    href: '#',
                    icon: faGooglePlay
                }
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
                ],
                img: {
                    path: '/e-bubble/assets/itmoLanding/',
                    active: 0,
                    content: ['0.png', '1.png', '2.png', '3.png', '4.png']
                },
                link: {
                    href: '#',
                    icon: faInternetExplorer
                }
            },
            {
                active: false,
                name: 'Fapay',
                type: 'Service',
                status: 'Development',
                briefly: 'Web Service for holding tournaments',
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
                ],
                img: {
                    path: '/e-bubble/assets/fapay/',
                    active: 0,
                    content: ['0.png', '1.png']
                },
                link: {
                    href: '#',
                    icon: faGithub
                }
            }
        ]
    });

    function handleProjectClick(name) {
        for (let p of projects.list) {
            if (p.name == name) {
                if (p.active) return;
            }
        }

        

        gallery.current.style.opacity = 0;
        prRays.current.style.opacity = 0;
        prStatus.current.style.background = 'white';
        prBriefly.current.style.background = 'white';

        setTimeout(() => {
            setTimeout(() => {gallery.current.style.opacity = 1;prRays.current.style.opacity = 1;}, 100);
            prStatus.current.style.background = 'unset';
            prBriefly.current.style.background = 'unset';

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
        }, 350);

        
    }

    function handleSwapImg(step) {
        return () => {

            let shouldStop = false;

            projects.list.forEach(p => {
                if (p.active) {
                    shouldStop = p.img.content.length === 1;
                }
            });

            if (shouldStop) return;

            gallery.current.style.opacity = 0;
            prRays.current.style.opacity = 0;
            setTimeout(() => {
                let newProjects = projects.list.map(p => {
                    if (p.active) {
                        
                        let newActive = p.img.active + step;
    
                        if (newActive > p.img.content.length - 1) newActive = 0;
                        if (newActive < 0) newActive = p.img.content.length - 1;
    
                        return Object.assign({}, p, {img: {path: p.img.path, active: newActive, content: p.img.content}});
                    } else return p;
                });
    
                setProjects({list: newProjects});

                setTimeout(() => {gallery.current.style.opacity = 1;prRays.current.style.opacity = 1;}, 100);
            }, 300);
            
        }
    }

    let prStatus = useRef(null);
    let prBriefly = useRef(null);
    let gallery = useRef(null);
    let prRays = useRef(null);

    useEffect(() => {
        gallery.current.style.opacity = 1;
        prRays.current.style.opacity = 1;
        prBriefly.current.style.background = 'unset';
        prStatus.current.style.background = 'unset';
    }, []);

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
                                
                                <div className='projectStatus__text projectStatus__text_large'>
                                    <p className='projectStatus__textGradient'>
                                    [BRIEFLY]<br/>
                                    <p className='projectStatus__brieflyAnim' ref={prBriefly}>
                                    {   
                                        projects.list.map(p => {
                                            return p.active ? p.briefly : null;  
                                        })
                                    }
                                    </p>
                                    </p>
                                </div>

                                <div className='projectStatus__text'>
                                    <p className='projectStatus__textGradient'>
                                    [STATUS]<br/>
                                    <p className='projectStatus__statusAnim' ref={prStatus}>
                                    {   
                                        projects.list.map(p => {
                                            return p.active ? p.status : null;  
                                        })
                                    }
                                    </p>
                                    </p>
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
                            <div className='projects__projectGalleryImgWrapper' ref={gallery}>
                            {
                                projects.list.map(p => {
                                    if (p.active) {
                                        return <img src={p.img.path + p.img.content[p.img.active]} />
                                    }
                                })
                            }
                            </div>
                            <div className='projects__projectsGalleryControllerWrapper'>
                                <div className='projects__projectsGalleryController' onClick={handleSwapImg(-1)} ><FontAwesomeIcon icon={faChevronLeft} /></div>
                                <div className='projects__projectsGalleryController' onClick={handleSwapImg(1)} ><FontAwesomeIcon icon={faChevronRight} /></div>
                                <div className='projects__galleryHint'>
                                {'screenshot '}
                                {
                                    projects.list.map(p => {
                                        if (p.active) {
                                            return p.img.active + 1;
                                        }
                                    })
                                }
                                {' / '}
                                {
                                    projects.list.map(p => {
                                        if (p.active) {
                                            return p.img.content.length;
                                        }
                                    })
                                }
                                </div>

                                <div className='doughnut__doughnutProjector galleryProjector'>
                                    <div className='doughnut__doughnutProjectorDecorator'></div>


                                    <svg className='doughnut__doughnutProjectorRays galleryProjectorRays' ref={prRays} width="58" height="67" viewBox="0 0 58 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect className='doughnut__doughnutProjectorRays_main' y="10.0261" width="3" height="60" rx="1.5" transform="rotate(-20 0 10.0261)" fill="#B0BDFF" fill-opacity="0.5"/>
                                        <rect className='doughnut__doughnutProjectorRays_mainDelayed' x="54.2607" y="9" width="3" height="60" rx="1.5" transform="rotate(20 54.2607 9)" fill="#B0BDFF" fill-opacity="0.5"/>
                                        <rect className='doughnut__doughnutProjectorRays_first' x="36.6045" y="28" width="3" height="15" rx="1.5" transform="rotate(10 36.6045 28)" fill="#B0BDFF" fill-opacity="0.5"/>
                                        <rect className='doughnut__doughnutProjectorRays_second' x="27" width="3" height="40" rx="1.5" fill="#B0BDFF" fill-opacity="0.5"/>
                                        <rect className='doughnut__doughnutProjectorRays_first' x="23" y="43.5209" width="3" height="15" rx="1.5" transform="rotate(-10 23 43.5209)" fill="#B0BDFF" fill-opacity="0.5"/>
                                        <rect className='doughnut__doughnutProjectorRays_third' x="45.1304" y="8" width="3" height="15" rx="1.5" transform="rotate(20 45.1304 8)" fill="#B0BDFF" fill-opacity="0.5"/>
                                        <rect className='doughnut__doughnutProjectorRays_third' x="14" y="16.5209" width="3" height="20" rx="1.5" transform="rotate(-10 14 16.5209)" fill="#B0BDFF" fill-opacity="0.5"/>
                                    </svg>


                                </div>

                                {/* {
                                    projects.list.map(p => {
                                        if (p.active) {
                                            return <a href={p.link.href}><div className='projects__projectLink'><FontAwesomeIcon icon={p.link.icon} /></div></a>;
                                        }
                                    }) 
                                } */}
                                
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