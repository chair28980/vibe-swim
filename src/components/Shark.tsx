'use client';

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const SmileyFace = () => {
  const [isBobbing, setIsBobbing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // Stop confetti after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleButtonClick = () => {
    setIsBobbing(!isBobbing);
    if (!isBobbing) {
      setShowConfetti(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
        />
      )}
      
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className={isBobbing ? 'animate-bob' : ''}
      >
        {/* Smiley face head */}
        <circle
          cx="150"
          cy="150"
          r="100"
          fill="#FFD700"
          stroke="#000"
          strokeWidth="3"
        />
        
        {/* Shark fin */}
        <path
          d="M150 50 L 180 20 L 150 10 L 120 20 Z"
          fill="#4a90e2"
          stroke="#000"
          strokeWidth="2"
        />
        
        {/* Headphones */}
        <path
          d="M80 120 C 60 120, 40 140, 40 160 C 40 180, 60 200, 80 200"
          fill="none"
          stroke="#333"
          strokeWidth="8"
        />
        <path
          d="M220 120 C 240 120, 260 140, 260 160 C 260 180, 240 200, 220 200"
          fill="none"
          stroke="#333"
          strokeWidth="8"
        />
        <path
          d="M80 200 L 220 200"
          fill="none"
          stroke="#333"
          strokeWidth="8"
        />
        
        {/* Face elements */}
        <g>
          {/* Eyes */}
          <circle cx="110" cy="130" r="15" fill="white" stroke="#000" strokeWidth="2" />
          <circle cx="190" cy="130" r="15" fill="white" stroke="#000" strokeWidth="2" />
          <circle cx="110" cy="130" r="7" fill="black" />
          <circle cx="190" cy="130" r="7" fill="black" />
          
          {/* Glasses */}
          <circle cx="110" cy="130" r="25" fill="none" stroke="#333" strokeWidth="3" />
          <circle cx="190" cy="130" r="25" fill="none" stroke="#333" strokeWidth="3" />
          <line x1="135" y1="130" x2="165" y2="130" stroke="#333" strokeWidth="3" />
          <line x1="85" y1="130" x2="65" y2="120" stroke="#333" strokeWidth="3" />
          <line x1="215" y1="130" x2="235" y2="120" stroke="#333" strokeWidth="3" />
          
          {/* Smile */}
          <path
            d="M100 170 Q 150 200, 200 170"
            fill="none"
            stroke="#000"
            strokeWidth="3"
          />
        </g>
      </svg>
      
      <button
        onClick={handleButtonClick}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
      >
        {isBobbing ? 'Stop the Vibes' : 'Start the Vibes'}
      </button>
    </div>
  );
};

export default SmileyFace; 