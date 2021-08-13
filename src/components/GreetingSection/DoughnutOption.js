import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DoughnutOption({icon, addIcon=null, name, color, addColor=null, style}) {

    return (
        <div className='doughnut__option' style={style}>
            <div className='doughnut__optionLogo'>
                <div className='doughnut__optionLogoWrapper'>
                    <FontAwesomeIcon icon={icon} className='doughnut__optionLogoContent' style={{color: color}}/>
                    {addIcon ? <FontAwesomeIcon icon={addIcon} className='doughnut__optionLogoContent' style={{color: addColor}}/> : null}
                </div>
            </div>

            <div className='doughnut__optionName'>
                {name}
            </div>
        </div>
    );

}

export default DoughnutOption;