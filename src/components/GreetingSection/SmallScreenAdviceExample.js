import React, { useEffect, useState } from "react";

function SmallScreenAdviceExample({defaultSize, styles, shouldScan=false, name}) {

    let [size, setSize] = useState(defaultSize);

    useEffect(() => {

        if (!shouldScan) return;

        window.addEventListener('resize', () => {
            setSize(`${window.innerWidth}x${window.innerHeight}`);
        }, {passive: true})

        window.addEventListener('DOMContentLoaded', () => {
            setSize(`${window.innerWidth}x${window.innerHeight}`);
        }, {passive: true})
    }, []);

    return (
        <div className='screenExample' style={styles}>
            <p className='screenName'>{name}</p>
            <img src={'/e-bubble/assets/desktops/desktop.png'} />
            <p className='screenSize'>{size}</p>
        </div>
    );

}

export default SmallScreenAdviceExample;