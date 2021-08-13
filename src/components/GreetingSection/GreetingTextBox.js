import React from "react";
import Heading from "../Heading/Heading";

function GreetingSection({heading, text}) {

    return (
        <div className='textBox__wrapper'>
            <Heading text={heading} />
            {text}
        </div>
    );

}

export default GreetingSection;