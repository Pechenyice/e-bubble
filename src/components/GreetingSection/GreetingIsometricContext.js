import React from "react";
import { faGithub, faVk } from '@fortawesome/free-brands-svg-icons';
import GreetingIsometricLink from "./GreetingIsometricLink";

function GreetingIsometricContext() {

    return (
        <div className='textBox__isometric isometric'>
            <GreetingIsometricLink icon={faGithub} name='Github'/>
            <GreetingIsometricLink icon={faVk} name='VK' color='#4376A6' borderColor='#1A4B78'/>
        </div>
    );

}

export default GreetingIsometricContext;