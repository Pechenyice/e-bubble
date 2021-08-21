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
                    href: 'https://github.com/Pechenyice/vkAnsweringBot',
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
                    href: 'https://brassbook.ru/player',
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
                    href: 'https://github.com/Pechenyice/pc-prebuilder',
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
                    href: 'https://play.google.com/store/apps/details?id=com.rapidsoftware.spoconnection&hl=ru&gl=US',
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
                    href: 'https://spo-landing.herokuapp.com/',
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
                    href: 'https://github.com/Pechenyice/fapay',
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
        prStatus.current.style.background = '#FADE2B';
        prBriefly.current.style.background = '#FADE2B';
        prLink.current.style.color = '#FADE2B';

        setTimeout(() => {
            setTimeout(() => {gallery.current.style.opacity = 1;prRays.current.style.opacity = 1;}, 100);
            prStatus.current.style.background = 'unset';
            prBriefly.current.style.background = 'unset';
            prLink.current.style.color = '#181818';

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
    let prLink = useRef(null);
    let prBriefly = useRef(null);
    let gallery = useRef(null);
    let prRays = useRef(null);

    useEffect(() => {
        gallery.current.style.opacity = 1;
        prRays.current.style.opacity = 1;
        prBriefly.current.style.background = 'unset';
        prStatus.current.style.background = 'unset';
        prLink.current.style.color = '#181818';
    }, []);

    return (
        <div className='app__projectsWrapperBox'>
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


                                    <svg className='doughnut__doughnutProjectorRays' ref={prRays} width="134" height="111" viewBox="0 0 134 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M66.5 110.5L0 0H134L66.5 110.5Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear" x1="67" y1="0" x2="67" y2="110.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#778FE4" stop-opacity="0"/>
                                    <stop offset="0.3125" stop-color="#778FE4" stop-opacity="0.05"/>
                                    <stop offset="0.640625" stop-color="#778FE4" stop-opacity="0.2"/>
                                    <stop offset="1" stop-color="#778FE4" stop-opacity="0.65"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>


                                </div>

                                {
                                    projects.list.map(p => {
                                        if (p.active) {
                                            return <a className='projects__projectLinkWrapper' target='_blank' href={p.link.href}><div className='projects__projectLink'><span className='projects__projectBackground' ref={prLink}><FontAwesomeIcon icon={p.link.icon} /></span></div><p className='projects__projectLinkText'>link</p></a>;
                                        }
                                    }) 
                                }
                                
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