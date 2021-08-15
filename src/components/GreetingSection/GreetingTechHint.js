import React from "react";

function GreetingTechHint({name, text, opacity, pos}) {

    return (
        <div className='hintBox__hint' style={Object.assign({}, pos, {opacity: opacity})}>
            {text}
        </div>
    );
}

export default GreetingTechHint;