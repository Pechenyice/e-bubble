import React, {useState, useEffect} from "react";
import './GreetingSection.css';
import DoughnutList from "./DoughnutList";
import HintsList from "./HintsList";
import GreetingTechHint from "./GreetingTechHint";
import IsometricHeading from "../PersonalSection/IsometricHeading";

//TODO: Create normal system of timeouts for doughnut graph, now implementation is shockingly awful

function GreetingSection() {

    let [dreams, setDreams] = useState({
        techs: [
            {
                tech: 'JavaScript',
                text: <p className='hintBox__text'>Started learning JS <span className='greeting__accent'>3 years</span> ago. Now I am confidently writing <span className='greeting__accent'>"vanilla" JS</span> and starting look for suitable framework</p>,
                display: false,
                // pos: {
                //     left: '-500px',
                //     top: '50px'
                // } 
            },
            {
                tech: 'React',
                text: <p className='hintBox__text'>This <span className='greeting__accent'>page is written with React</span>! Now it is <span className='greeting__accent'>my main choice</span> between JS frameworks</p>,
                display: false,
                // pos: {
                //     left: '700px',
                //     top: '400px'
                // } 
            },
            {
                tech: 'Node.js',
                text: <p className='hintBox__text'>Awesome runtime. <span className='greeting__accent'>2 of 3 years use this platform</span> for all fullstack projects</p>,
                display: false,
                // pos: {
                //     left: '-450px',
                //     top: '500px'
                // } 
            },
            {
                tech: 'HTML+CSS',
                text: <p className='hintBox__text'>Nothing interesting. Markup language and styles sheet are web base. Trying to be modern for <span className='greeting__accent'>5 years</span> in a row</p>,
                display: false,
                // pos: {
                //     left: '-500px',
                //     top: '200px'
                // } 
            },
            {
                tech: 'Electron.js',
                text: <p className='hintBox__text'>Very <span className='greeting__accent'>interesting for me</span> framework. I don't think it is useful for me every day, but it <span className='greeting__accent'>makes writing desktops fun and easy</span></p>,
                display: false,
                // pos: {
                //     left: '600px',
                //     top: '-50px'
                // } 
            },
            {
                tech: 'Figma',
                text: <p className='hintBox__text'>Look at this <span className='greeting__accent'><span className='greeting__accentJoke'>pretty</span> design</span>. I think Figma will want to disown it, but it is <span className='greeting__accent'>created in this tool</span></p>,
                display: false,
                // pos: {
                //     left: '700px',
                //     top: '250px'
                // } 
            },
            {
                tech: 'SQL/NoSQL',
                text: <p className='hintBox__text'>select * from knowings;<br/><span className='greeting__accent'>Empty set</span> (0.00 sec)<br/><br/>Oh...</p>,
                display: false,
                // pos: {
                //     left: '-400px',
                //     top: '0px'
                // } 
            },
            {
                tech: 'Git',
                text: <p className='hintBox__text'>init -{'>'} remote -{'>'}  add -{'>'}  commit -{'>'} push <br/><br/> Not all, but <span className='greeting__accent'>99%</span> ;)</p>,
                display: false,
                // pos: {
                //     left: '700px',
                //     top: '50px'
                // } 
            }
        ]
    });

    let [autoShow, setAutoShow] = useState({
        isActive: false,
        interval: null,
        current: 0
    });
    
    let [svgs, setSvgs] = useState(
        {
            svgList: [
                {
                    tech: 'JavaScript',
                    staticContent: <g>
                        <mask id="path-1-inside-1" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M265.355 49.7738C236.771 49.7738 209.482 55.3204 184.506 65.3959L165.432 20.4597C196.269 7.89756 230.004 0.97583 265.356 0.97583C300.531 0.97583 334.106 7.82855 364.818 20.2718L345.742 65.2103C320.892 55.2522 293.763 49.7738 265.355 49.7738Z"/>
                        </mask>
                        
                        <path d="M184.506 65.3959L183.731 65.7247L184.054 66.4853L184.821 66.1762L184.506 65.3959ZM165.432 20.4597L165.114 19.6805L164.324 20.0026L164.657 20.7885L165.432 20.4597ZM364.818 20.2718L365.592 20.6005L365.926 19.8132L365.133 19.492L364.818 20.2718ZM345.742 65.2103L345.429 65.9912L346.195 66.2979L346.517 65.539L345.742 65.2103ZM184.821 66.1762C209.698 56.1403 236.88 50.6151 265.355 50.6151V48.9324C236.661 48.9324 209.265 54.5004 184.191 64.6157L184.821 66.1762ZM164.657 20.7885L183.731 65.7247L185.28 65.0672L166.206 20.131L164.657 20.7885ZM265.356 0.134484C229.893 0.134484 196.051 7.07804 165.114 19.6805L165.749 21.2389C196.487 8.71709 230.115 1.81718 265.356 1.81718V0.134484ZM365.133 19.492C334.323 7.0088 300.641 0.134484 265.356 0.134484V1.81718C300.421 1.81718 333.888 8.64829 364.502 21.0516L365.133 19.492ZM346.517 65.539L365.592 20.6005L364.043 19.943L344.968 64.8815L346.517 65.539ZM265.355 50.6151C293.654 50.6151 320.677 56.0724 345.429 65.9912L346.055 64.4293C321.107 54.4321 293.872 48.9324 265.355 48.9324V50.6151Z" fill="#F0DB4F" mask="url(#path-1-inside-1)"/>
                    </g>,
                    path: "M265.355 49.7738C236.771 49.7738 209.482 55.3204 184.506 65.3959L165.432 20.4597C196.269 7.89756 230.004 0.97583 265.356 0.97583C300.531 0.97583 334.106 7.82855 364.818 20.2718L345.742 65.2103C320.892 55.2522 293.763 49.7738 265.355 49.7738Z",
                    activeColor: '#E8FC04'
                },
                {
                    tech: 'Git',
                    staticContent: <g>
                        <mask id="path-3-inside-2" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M177.171 68.6295C128.812 90.32 89.8719 129.26 68.1813 177.619L23.2441 158.545C49.8811 98.5745 98.1263 50.3291 158.096 23.6921L177.171 68.6295Z"/>
                        </mask>
                        
                        <path d="M68.1813 177.619L67.8525 178.394L68.6115 178.716L68.949 177.964L68.1813 177.619ZM177.171 68.6295L177.516 69.3972L178.268 69.0597L177.946 68.3007L177.171 68.6295ZM23.2441 158.545L22.4752 158.203L22.128 158.985L22.9154 159.319L23.2441 158.545ZM158.096 23.6921L158.871 23.3634L158.537 22.576L157.755 22.9232L158.096 23.6921ZM68.949 177.964C90.5551 129.793 129.345 91.0033 177.516 69.3972L176.827 67.8618C128.279 89.6368 89.1887 128.728 67.4136 177.275L68.949 177.964ZM22.9154 159.319L67.8525 178.394L68.51 176.845L23.5729 157.77L22.9154 159.319ZM157.755 22.9232C97.5943 49.6448 49.1968 98.0425 22.4752 158.203L24.0131 158.886C50.5654 99.1065 98.6583 51.0134 158.438 24.461L157.755 22.9232ZM177.946 68.3007L158.871 23.3634L157.322 24.0209L176.397 68.9582L177.946 68.3007Z" fill="#F1502F" mask="url(#path-3-inside-2)"/>
                    </g>,
                    path: "M177.171 68.6295C128.812 90.32 89.8719 129.26 68.1813 177.619L23.2441 158.545C49.8811 98.5745 98.1263 50.3291 158.096 23.6921L177.171 68.6295Z",
                    activeColor: '#F1502F'
                },
                {
                    tech: 'HTML+CSS',
                    staticContent: <g>
                        <mask id="path-5-inside-3" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M463.26 354.341L508.197 373.416C481.545 433.594 433.146 481.994 372.967 508.645L353.893 463.709C402.46 442.002 441.554 402.908 463.26 354.341Z"/>
                        </mask>
                        
                        <path d="M508.197 373.416L508.966 373.756L509.312 372.975L508.525 372.641L508.197 373.416ZM463.26 354.341L463.589 353.567L462.829 353.244L462.492 353.998L463.26 354.341ZM372.967 508.645L372.193 508.974L372.526 509.761L373.308 509.415L372.967 508.645ZM353.893 463.709L353.549 462.941L352.796 463.277L353.118 464.037L353.893 463.709ZM508.525 372.641L463.589 353.567L462.931 355.116L507.868 374.19L508.525 372.641ZM373.308 509.415C433.677 482.679 482.23 434.126 508.966 373.756L507.427 373.075C480.861 433.062 432.614 481.309 372.626 507.876L373.308 509.415ZM353.118 464.037L372.193 508.974L373.742 508.317L354.667 463.38L353.118 464.037ZM462.492 353.998C440.87 402.376 401.927 441.319 353.549 462.941L354.236 464.477C402.992 442.686 442.237 403.44 464.028 354.684L462.492 353.998Z" fill="#F06529" mask="url(#path-5-inside-3)"/>
                    </g>,
                    path: "M463.26 354.341L508.197 373.416C481.545 433.594 433.146 481.994 372.967 508.645L353.893 463.709C402.46 442.002 441.554 402.908 463.26 354.341Z",
                    activeColor: '#F06529'
                },
                {
                    tech: 'Electron.js',
                    staticContent: <g>
                        <mask id="path-7-inside-4" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M346.136 466.426L365.211 511.364C334.446 523.858 300.803 530.74 265.553 530.74C230.126 530.74 196.322 523.789 165.432 511.176L184.506 466.24C209.535 476.366 236.892 481.942 265.552 481.942C294.035 481.942 321.232 476.434 346.136 466.426Z"/>
                        </mask>
                        
                        <path d="M365.211 511.364L365.527 512.144L366.319 511.822L365.985 511.036L365.211 511.364ZM346.136 466.426L346.91 466.098L346.588 465.338L345.822 465.646L346.136 466.426ZM165.432 511.176L164.657 510.847L164.324 511.632L165.114 511.955L165.432 511.176ZM184.506 466.24L184.821 465.46L184.054 465.15L183.731 465.911L184.506 466.24ZM365.985 511.036L346.91 466.098L345.361 466.755L364.436 511.693L365.985 511.036ZM265.553 531.581C300.913 531.581 334.663 524.678 365.527 512.144L364.894 510.585C334.228 523.038 300.692 529.899 265.553 529.899V531.581ZM165.114 511.955C196.103 524.608 230.015 531.581 265.553 531.581V529.899C230.236 529.899 196.541 522.969 165.75 510.397L165.114 511.955ZM183.731 465.911L164.657 510.847L166.206 511.505L185.28 466.569L183.731 465.911ZM265.552 481.101C237.002 481.101 209.752 475.546 184.821 465.46L184.19 467.02C209.318 477.186 236.782 482.783 265.552 482.783V481.101ZM345.822 465.646C321.016 475.614 293.926 481.101 265.552 481.101V482.783C294.144 482.783 321.448 477.254 346.45 467.207L345.822 465.646Z" fill="#9FEAF9" mask="url(#path-7-inside-4)"/>
                    </g>,
                    path: "M346.136 466.426L365.211 511.364C334.446 523.858 300.803 530.74 265.553 530.74C230.126 530.74 196.322 523.789 165.432 511.176L184.506 466.24C209.535 476.366 236.892 481.942 265.552 481.942C294.035 481.942 321.232 476.434 346.136 466.426Z",
                    activeColor: '#9FEAF9'
                },
                {
                    tech: 'Node.js',
                    staticContent: <g>
                        <mask id="path-9-inside-5" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M530.293 266C530.293 301.25 523.411 334.893 510.917 365.659L465.979 346.584C475.987 321.68 481.495 294.483 481.495 266C481.495 237.34 475.919 209.983 465.793 184.954L510.729 165.88C523.342 196.77 530.293 230.573 530.293 266Z"/>
                        </mask>
                        
                        <path d="M510.917 365.659L510.588 366.433L511.375 366.767L511.696 365.975L510.917 365.659ZM465.979 346.584L465.199 346.27L464.891 347.036L465.651 347.358L465.979 346.584ZM465.793 184.954L465.464 184.179L464.703 184.503L465.013 185.269L465.793 184.954ZM510.729 165.88L511.508 165.562L511.185 164.772L510.4 165.105L510.729 165.88ZM511.696 365.975C524.23 335.111 531.134 301.361 531.134 266H529.451C529.451 301.14 522.591 334.676 510.137 365.342L511.696 365.975ZM465.651 347.358L510.588 366.433L511.246 364.884L466.308 345.809L465.651 347.358ZM480.653 266C480.653 294.374 475.167 321.464 465.199 346.27L466.76 346.898C476.807 321.896 482.336 294.592 482.336 266H480.653ZM465.013 185.269C475.099 210.2 480.653 237.45 480.653 266H482.336C482.336 237.23 476.739 209.766 466.573 184.638L465.013 185.269ZM510.4 165.105L465.464 184.179L466.122 185.728L511.058 166.654L510.4 165.105ZM531.134 266C531.134 230.462 524.161 196.551 511.508 165.562L509.95 166.198C522.522 196.989 529.451 230.684 529.451 266H531.134Z" fill="#3C873A" mask="url(#path-9-inside-5)"/>
                    </g>,
                    path: "M530.293 266C530.293 301.25 523.411 334.893 510.917 365.659L465.979 346.584C475.987 321.68 481.495 294.483 481.495 266C481.495 237.34 475.919 209.983 465.793 184.954L510.729 165.88C523.342 196.77 530.293 230.573 530.293 266Z",
                    activeColor: '#3C873A'    
                },
                {
                    tech: 'Figma',
                    staticContent: <g>
                        <mask id="path-11-inside-6" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2441 372.574C49.8103 432.691 98.0728 481.074 158.105 507.796L177.18 462.858C128.759 441.082 89.8018 402.005 68.1806 353.5L23.2441 372.574Z"/>
                        </mask>
                        
                        <path d="M158.105 507.796L157.763 508.565L158.545 508.913L158.879 508.125L158.105 507.796ZM23.2441 372.574L22.9154 371.8L22.1295 372.134L22.4746 372.914L23.2441 372.574ZM177.18 462.858L177.955 463.186L178.277 462.428L177.525 462.09L177.18 462.858ZM68.1806 353.5L68.949 353.157L68.6125 352.403L67.8518 352.726L68.1806 353.5ZM158.447 507.028C98.6056 480.39 50.4955 432.16 24.0137 372.234L22.4746 372.914C49.1252 433.222 97.54 481.758 157.763 508.565L158.447 507.028ZM176.406 462.529L157.331 507.467L158.879 508.125L177.955 463.186L176.406 462.529ZM67.4121 353.843C89.1175 402.537 128.226 441.765 176.835 463.625L177.525 462.09C129.293 440.399 90.4861 401.474 68.949 353.157L67.4121 353.843ZM23.5729 373.349L68.5093 354.274L67.8518 352.726L22.9154 371.8L23.5729 373.349Z" fill="#FF7765" mask="url(#path-11-inside-6)"/>
                    </g>,
                    path: "M23.2441 372.574C49.8103 432.691 98.0728 481.074 158.105 507.796L177.18 462.858C128.759 441.082 89.8018 402.005 68.1806 353.5L23.2441 372.574Z",
                    activeColor: '#FF7765'
                },
                {
                    tech: 'SQL/NoSQL',
                    staticContent: <g>
                        <mask id="path-13-inside-7" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M64.7628 347.032C54.8049 322.182 49.3264 295.053 49.3264 266.645C49.3264 238.061 54.873 210.772 64.9487 185.796L20.0128 166.722C7.4509 197.559 0.529297 231.294 0.529297 266.645C0.529297 301.82 7.38207 335.395 19.8254 366.107L64.7628 347.032Z"/>
                        </mask>
                        
                        <path d="M64.7628 347.032L65.0916 347.807L65.8505 347.485L65.5438 346.719L64.7628 347.032ZM64.9487 185.796L65.7289 186.111L66.0381 185.344L65.2774 185.021L64.9487 185.796ZM20.0128 166.722L20.3416 165.947L19.5557 165.614L19.2337 166.404L20.0128 166.722ZM19.8254 366.107L19.0456 366.423L19.3668 367.216L20.1541 366.882L19.8254 366.107ZM48.4851 266.645C48.4851 295.162 53.9847 322.397 63.9819 347.345L65.5438 346.719C55.625 321.967 50.1678 294.944 50.1678 266.645H48.4851ZM64.1684 185.481C54.0531 210.555 48.4851 237.951 48.4851 266.645H50.1678C50.1678 238.17 55.693 210.988 65.7289 186.111L64.1684 185.481ZM19.6841 167.496L64.6199 186.57L65.2774 185.021L20.3416 165.947L19.6841 167.496ZM1.37064 266.645C1.37064 231.404 8.27043 197.777 20.792 167.039L19.2337 166.404C6.63137 197.34 -0.312049 231.183 -0.312049 266.645H1.37064ZM20.6052 365.791C8.20182 335.178 1.37064 301.71 1.37064 266.645H-0.312049C-0.312049 301.93 6.56232 335.612 19.0456 366.423L20.6052 365.791ZM64.4341 346.258L19.4967 365.333L20.1541 366.882L65.0916 347.807L64.4341 346.258Z" fill="#00758F" mask="url(#path-13-inside-7)"/>
                    </g>,
                    path: "M64.7628 347.032C54.8049 322.182 49.3264 295.053 49.3264 266.645C49.3264 238.061 54.873 210.772 64.9487 185.796L20.0128 166.722C7.4509 197.559 0.529297 231.294 0.529297 266.645C0.529297 301.82 7.38207 335.395 19.8254 366.107L64.7628 347.032Z",
                    activeColor: '#00758F',
                },
                {
                    tech: 'React',
                    staticContent: <g>
                        <mask id="path-15-inside-8" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M508.188 158.553C481.466 98.5211 433.083 50.2588 372.967 23.6926L353.893 68.6284C402.398 90.2497 441.474 129.207 463.25 177.628L508.188 158.553Z"/>
                        </mask>
                        
                        <path d="M372.967 23.6926L373.307 22.9231L372.526 22.578L372.192 23.3639L372.967 23.6926ZM508.188 158.553L508.517 159.327L509.305 158.993L508.957 158.211L508.188 158.553ZM353.893 68.6284L353.118 68.2997L352.795 69.0604L353.55 69.3969L353.893 68.6284ZM463.25 177.628L462.483 177.973L462.821 178.724L463.579 178.402L463.25 177.628ZM372.627 24.4622C432.552 50.944 480.782 99.0539 507.419 158.895L508.957 158.211C482.149 97.9883 433.614 49.5736 373.307 22.9231L372.627 24.4622ZM354.667 68.9572L373.741 24.0214L372.192 23.3639L353.118 68.2997L354.667 68.9572ZM464.017 177.283C442.157 128.673 402.929 89.5654 354.235 67.86L353.55 69.3969C401.866 90.9339 440.792 129.741 462.483 177.973L464.017 177.283ZM507.859 157.779L462.921 176.853L463.579 178.402L508.517 159.327L507.859 157.779Z" fill="#61DBFB" mask="url(#path-15-inside-8)"/>
                    </g>,
                    path: "M508.188 158.553C481.466 98.5211 433.083 50.2588 372.967 23.6926L353.893 68.6284C402.398 90.2497 441.474 129.207 463.25 177.628L508.188 158.553Z",
                    activeColor: '#61DBFB'
                }
            ] 
        }
    );

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function handleNewRandHint() {
        let newCurrent = 0;
        do {
            newCurrent = getRandomInt(dreams.techs.length);
        }
        while (newCurrent == autoShow.current);


        // let highestTimeoutId = setTimeout(";");
        // for (var i = 0 ; i < highestTimeoutId ; i++) {
        //     clearTimeout(i); 
        // }
        // clearTimeout(autoShow.timer);

        setDreams({techs: dreams.techs.map((t, i) => i == newCurrent ? {tech: t.tech, text: t.text, display: true, pos: t.pos} : {tech: t.tech, text: t.text, display: false, pos: t.pos})})
        setAutoShow({isActive: true, current: newCurrent, timer: setTimeout(handleNewRandHint, 5000)});
        
        
    }  
         
    useEffect(() => {

        let timer = setTimeout(handleNewRandHint, 5000);

        return () => clearTimeout(timer);


    }, []);


                      

    function handleDoughnutIconHover(name) {
        let newDreams = dreams.techs.map(t => t.tech === name ? {tech: t.tech, text: t.text, display: true, pos: t.pos} : {tech: t.tech, text: t.text, display: false, pos: t.pos});
        setDreams({techs: newDreams});
        // clearTimeout(autoShow.timer);
        let highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i); 
        }
        setAutoShow({isActive: false, timer: null, current: 0});
    }



    function handleDoughnutIconLeave(name) {
        let newDreams = dreams.techs.map(t => t.tech === name ? {tech: t.tech, text: t.text, display: false, pos: t.pos} : t);
        setDreams({techs: newDreams});
        setTimeout(handleNewRandHint, 5000);
    }

    return (
        <div style={{perspective: '10000px'}}>
        <div className='app__greetingWrapper' style={{transform: 'translateZ(0px)', transition: '1s'}}>
        <section className='app__greeting greeting'>
            
            

            <div className='greeting__graph graph'>

                <div className='graph__doughnut doughnut'>

                    <DoughnutList dreams={dreams} onHover={handleDoughnutIconHover} onLeave={handleDoughnutIconLeave} />

                    <svg width="531" height="531" viewBox="0 0 531 531" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {
                            svgs.svgList.map((s, i) => {

                                let isActive = false;

                                dreams.techs.forEach(t => {
                                    t.tech === s.tech ? isActive = t.display : isActive = isActive;
                                });

                                return <g key={i}>{[s.staticContent, <path className='graph__cell' fill-opacity={isActive ? '1' : '0'} d={s.path} onMouseEnter={() => {handleDoughnutIconHover(s.tech)}} onMouseLeave={() => {handleDoughnutIconLeave(s.tech)}} fill-rule="evenodd" clip-rule="evenodd" fill={s.activeColor} />]}</g>;
                            })
                        }
                    </svg>


                        {/* <div className='test' style={{transform: 'perspective(10000px) rotateX(15deg) skewY(15deg)'}}> FOR SVG</div> */}

                    

                    {
                        dreams.techs.map((t, i) => <GreetingTechHint key={i} pos={t.pos} name={t.tech} text={t.text} opacity={t.display ? 1 : 0}/>)
                    }


                    

                </div>

            </div>

            <div className='greeting__isometricTextBox isometricTextBox'>

                <div>

                    <h1 className='doughnut__heading'>
                        <span className='doughnut__headingWrapper'>
                            Hello, I’m<br/><span className='greeting__accent doughnut__bigHeading'>German Iskhakov</span><br/>the <span className='greeting__accent'>web developer</span>
                        </span>
                    </h1>

                    <IsometricHeading text={'Main competences'} />

                    <HintsList dreams={dreams} onHover={handleDoughnutIconHover} onLeave={handleDoughnutIconLeave} />

                    

                </div>

            </div>

            {/* <div className='greeting__hintBox hintBox'>

                {
                    dreams.techs.map((t, i) => <GreetingTechHint key={i} name={t.tech} text={t.text} opacity={t.display ? 1 : 0}/>)
                }

            </div> */}

            

            
        </section>
        </div>
        </div>
    );

}

export default GreetingSection;