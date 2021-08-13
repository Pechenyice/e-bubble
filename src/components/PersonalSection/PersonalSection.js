import React, {useState, useEffect, useRef} from "react";
import './PersonalSection.css';

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

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className='app__personal personal' >

            <div className='personal__awesomeBackground'></div>
            

        </section>
    );

}

export default PersonalSection;