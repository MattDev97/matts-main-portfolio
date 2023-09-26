import { useState, useEffect } from "react";
import './BackgroundGradientFollow.css';

function BackgroundGradientFollow({children}) {
	useEffect(() => {
		// Define the event handler
		const handleMouseMove = (event) => {
			setPosition({
			  x: event.clientX,
			  y: event.clientY,
			});
		};
		// Attach the event to the body
		document.body.addEventListener('mousemove', handleMouseMove);
	
		// Clean up the event listener when the component unmounts
		return () => {
		  document.body.removeEventListener('mousemove', handleMouseMove);
		};
	  }, []);  // The empty dependency array ensures this effect runs only on mount and unmount

    const [position, setPosition] = useState({ x: 0, y: 0 });
	

    return (
        <div 
		    style={{
		        background: `radial-gradient(circle 900px at ${position.x}px ${position.y}px, rgb(0 78 146 / 27%), transparent)`
		    }} 
            className="background-gradient-follow">
				
        </div>
    )
}

export default BackgroundGradientFollow;