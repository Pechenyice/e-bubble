import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './NavigationSection.css';

function NavigationSection() {

    function handleFastMoveClick(newView) {
        return () => {
            if (!window.viewManager.isInAction) {
                document.getElementsByClassName('lift__floor')[window.viewManager.activeView].classList.remove('lift__floor_active');
                document.getElementsByClassName('lift__floor')[newView].classList.add('lift__floor_active');
                window.viewManager.setDirectView(window.viewManager.activeView, newView);
            }
        }
    }

    return (
        <section className='app__navigationSection navigationSection'>

            <div className='navigationSection__navWrapper'>
            
                <div className='navigationSection__text'>
                    Use
                </div>
                <div className='navigationSection__mouse mouse'>
                    <div className='mouse__wheel'></div>
                    <FontAwesomeIcon className='mouse__arrow' icon={faArrowsAltV} />
                </div>
                <div className='navigationSection__text'>
                    or
                </div>
                <div className='navigationSection__lift lift'>
                    <div className='lift__floor lift__floor_active' onClick={handleFastMoveClick(0)}>
                        <div className='lift__box'>
                        
                        </div>
                        <div className='lift__name'>
                            <div className='lift__gate'></div>
                            Greeting
                        </div>
                    </div>

                    <div className='lift__floor' onClick={handleFastMoveClick(1)}>
                        <div className='lift__box'>
                        
                        </div>
                        <div className='lift__name'>
                            <div className='lift__gate'></div>
                            Personal
                        </div>
                    </div>

                    <div className='lift__floor' onClick={handleFastMoveClick(2)}>
                        <div className='lift__box'>
                        
                        </div>
                        <div className='lift__name'>
                            <div className='lift__gate'></div>
                            Projects
                        </div>
                    </div>
                </div>
                <div className='navigationSection__text'>
                    for<br/>scroll
                </div>

            </div>
            
        </section>
    );

}

export default NavigationSection;