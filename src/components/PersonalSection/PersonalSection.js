import React, {useState, useEffect, useRef} from "react";
import './PersonalSection.css';
import PersonalIsometricPlayground from "./PersonalIsometricPlayground";

function PersonalSection() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const handleResize = () => {
        const height = window.innerHeight;
        setWindowHeight(height);
    };

    useEffect(() => {

        window.addEventListener('resize', handleResize, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{position: 'absolute', top: 0, left: 0, perspective: '10000px', width: '100%', pointerEvents: 'none'}}>
        <div className='app__personalWrapper' style={{transform: 'translateX(150vw) translateY(150vh) translateZ(-10000px)', transition: '1s'}}>
        <section className='app__personal personal' >

            <div className='personal__awesomeBackground' 
                // style={{opacity: scrollPosition > (windowHeight / 2) ? '1' : '0'}}
            >
            </div>

            <PersonalIsometricPlayground />

            
            

        </section>
        </div>
        </div>
    );

}

export default PersonalSection;