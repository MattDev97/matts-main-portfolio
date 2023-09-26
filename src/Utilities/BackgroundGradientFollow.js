import { useState } from "react";
import './BackgroundGradientFollow.css';

function BackgroundGradientFollow({children}) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
	const handleMouseMove = (event) => {
		setPosition({
		  x: event.clientX,
		  y: event.clientY,
		});
	  };
    return (
        <div 
            onMouseMove={handleMouseMove}
		    style={{
		        background: `radial-gradient(circle 900px at ${position.x}px ${position.y}px, rgb(0 78 146 / 27%), transparent)`
		    }} 
            className="background-gradient-follow">
        </div>
    )
}

export default BackgroundGradientFollow;