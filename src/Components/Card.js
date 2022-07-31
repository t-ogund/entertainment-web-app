import React, { useState } from 'react';
import { ReactComponent as PlayIcon } from '../assets/icon-play.svg';

function Card(props) {

    const [ showPlay, setShowPlay ] = useState(false)

    function handleMouseEnter() {
        setShowPlay(true)
    }

    function handleMouseLeave() {
       setShowPlay(false);
    }

    return(
        <div className='Card'>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='card-image' style={{ backgroundImage: `url(${props.backgroundImage})`, maxWidth: '100%', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '6px'}}>
                <div className={`${showPlay === false ? 'hide' : 'play-container'}`}>
                    <PlayIcon />
                    <h1>Play</h1>
                </div>
            </div>
            <div className='details'>
                {props.year} &bull; {props.category} &bull; {props.rating}
            </div>
            <div className='title'>
                {props.title}
            </div>
        </div>
    )
}

export default Card