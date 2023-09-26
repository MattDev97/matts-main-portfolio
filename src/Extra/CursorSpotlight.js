// CursorSpotlight.js
import React, { useState, useEffect } from 'react';
import './CursorSpotlight.css';

const CursorSpotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div
            className="cursor-spotlight"
            style={{ background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)` }}
        ></div>
    );
};

export default CursorSpotlight;