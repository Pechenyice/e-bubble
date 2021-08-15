import React from "react";

function IsometricHeading({text}) {

    return (
        <div className='isometricHeading'>
            <h2>{text}</h2>
            <div className='isometricHeading__decorator'></div>
        </div>
    );

}

export default IsometricHeading;