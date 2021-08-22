import React, { useEffect, useRef } from 'react';

function CursorBackgroundEffect() {

    let cursorBack = useRef(null);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {

            cursorBack.current.style.left = e.pageX - 100 + 'px';
            cursorBack.current.style.top = e.pageY - 100 + 'px';

        }, {passive: true});
    }, []);

    return (
        <div className='cursorWrapper' ref={cursorBack} ></div>
    );

}

export default CursorBackgroundEffect;