import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DoughnutOption({icon, addIcon=null, name, color, addColor=null, style, onHover, onLeave}) {

    function handleTechHover() {
        onHover(name);
    }

    function handleTechLeave() {
        onLeave(name);
    }

    return (
        <div className='doughnut__option' style={style}>
            <div className='doughnut__optionLogo'>
                <div className='doughnut__optionLogoWrapper'>
                    <FontAwesomeIcon icon={icon} className='doughnut__optionLogoContent svgTechIcon' style={{color: color}} onMouseEnter={handleTechHover} onMouseLeave={handleTechLeave} />
                    {addIcon ? <FontAwesomeIcon icon={addIcon} className='doughnut__optionLogoContent svgTechIcon' style={{color: addColor}} onMouseEnter={handleTechHover} onMouseLeave={handleTechLeave} /> : null}
                </div>
            </div>

            <div className='doughnut__optionName'>
                {name}
            </div>
        </div>
    );

}

export default DoughnutOption;