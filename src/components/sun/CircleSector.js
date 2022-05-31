import './CircleSector.css';
import { useState } from 'react';

const hoverScale = 1.25;

const CircleSector = ({ projectId, image, alt, angle, initialAngle, move, scale }) => {
  const [hover, setHover] = useState(false);
  
  return (
    <div className='circle-sector' style={{ transform: `rotate(${angle / 2 + initialAngle}deg) translateX(${move}px) rotate(${angle / 2}deg) scale(${scale * (hover ? hoverScale : 1) * 100}%)` }}>
        <div className='child' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ transform: `rotate(${180 - angle}deg)` }} onClick={() => document.getElementById(projectId).scrollIntoView({ block: 'center' })}>
            <img className='uninteractable image' src={image} alt={alt} style={{ transform: `rotate(${-initialAngle - 180}deg)` }} />
        </div>
    </div>
  );
};

export default CircleSector;