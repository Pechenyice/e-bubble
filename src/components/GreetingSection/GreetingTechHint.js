import React from "react";

function GreetingTechHint({name, text, opacity}) {
    return (
        <div className='hintBox__hint' style={{opacity: opacity}}>
            {text}
        </div>
    );
}

export default GreetingTechHint;