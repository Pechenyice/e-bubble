import React from "react";
import { faGithub, faVk } from '@fortawesome/free-brands-svg-icons';
import PersonalIsometricLink from "./PersonalIsometricLink";

function PersonalIsometricContext() {

    return (
        <div className='textBox__isometric isometric'>
            <PersonalIsometricLink icon={faGithub} name='Github'/>
            <PersonalIsometricLink icon={faVk} name='VK' textColor='white' color='#4376A6' borderColor='#1A4B78'/>
        </div>
    );

}

export default PersonalIsometricContext;