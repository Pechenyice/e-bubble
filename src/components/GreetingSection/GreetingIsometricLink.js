import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GreetingIsometricLink({icon, name, color='white', borderColor='grey'}) {

    return (
        <div className='isometric__link'>
            <a href='#'>
                <div className='isometric__content' style={{backgroundColor: color, '--pseudoColor': borderColor}} >
                    <FontAwesomeIcon icon={icon} />
                </div>
                <p className='isometric__linkName' style={{'--pseudoColor': color}} >{name}</p>
            </a>
        </div>
    );

}

export default GreetingIsometricLink;