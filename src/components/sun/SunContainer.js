import './SunContainer.css';
import { useState, useRef } from 'react';
import Sun from './Sun';

const swayFactor = 0.04;

const SunContainer = () => {
  const [hover, setHover] = useState(false)
  
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const containerRef = useRef();

  const mouseMoveHandler = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMagnet({
      x: event.clientX - rect.left - containerRef.current.clientWidth / 2,
      y: event.clientY - rect.top - containerRef.current.clientHeight / 2
    });
  };

  return (
    <div ref={containerRef} className='sun-container' onMouseMove={mouseMoveHandler} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className='magnet' style={{ transform: hover && `translate(${magnet.x * swayFactor}px, ${magnet.y * swayFactor}px)` }}>
        <div className='float' style={{ animationPlayState: hover ? 'paused' : 'running' }}>
          <Sun />
        </div>
      </div>
    </div>
  );
};

export default SunContainer;