import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DoughnutOption({dreams, icon, addIcon=null, name, color, addColor=null, style, onHover, onLeave}) {

    function handleTechHover() {
        onHover(name);
    }

    function handleTechLeave() {
        onLeave(name);
    }

    let classes= ['doughnut__optionLogoContent', 'svgTechIcon'];

    let isActive = false;

    dreams.techs.forEach(t => {
        if (t.tech === name) {
            if (t.display) {
                classes.push('svgTechIcon_chosen');
                isActive = true;
            }
        }
    });

    return (
        <div className='doughnut__option' style={style} onMouseEnter={handleTechHover} onMouseLeave={handleTechLeave}>
            <div className='doughnut__optionLogo'>
                <div className='doughnut__optionLogoWrapper'>
                    <FontAwesomeIcon icon={icon} className={classes.join(' ')} style={{color: isActive ? color : '#fff', opacity: isActive ? '1' : '.3'}} />
                    {addIcon ? <FontAwesomeIcon icon={addIcon} className={classes.join(' ')} style={{color: isActive ? addColor : '#fff', opacity: isActive ? '1' : '.3'}} /> : null}
                </div>
            </div>

            <div className='doughnut__optionName' style={{opacity: isActive ? '1' : '.3'}}>
                {name}
            </div>
        </div>
    );

}

export default DoughnutOption;