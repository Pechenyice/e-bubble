import React from "react";

function PersonalSkillRating({rating, name}) {

    return (

        <div className='isometric__skill'>
            <p className='isometric__skillName'>{name}</p>

            <div className='isometric__skillRatingWrapper'>
                {[...Array(rating)].map((x, i) => <div key={i} className='isometric__skillRating isometric__skillRating_active'></div>)}
                {[...Array(5 - rating)].map((x, i) => <div key={i} className='isometric__skillRating'></div>)}
            </div>
        </div>

        
    );

}

export default PersonalSkillRating;