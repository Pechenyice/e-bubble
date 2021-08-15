import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HintOption({dreams, icon, addIcon=null, name, color, addColor=null, style, onHover, onLeave}) {

    function handleTechHover() {
        onHover(name);
    }

    function handleTechLeave() {
        onLeave(name);
    }

    let classes= ['isometricTextBox__option'];

    let isActive = false;

    dreams.techs.forEach(t => {
        if (t.tech === name) {
            if (t.display) {
                classes.push('isometricTextBox__option_chosen');
                isActive = true;
            }
        }
    });

    return (
        <div className={classes.join(' ')} style={style} onMouseEnter={handleTechHover} onMouseLeave={handleTechLeave}>
            <div className='doughnut__optionName' style={{opacity: '1'}}>
                {name}
            </div>
        </div>
    );

}

export default HintOption;