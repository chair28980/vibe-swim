'use client';

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

interface SmileyFaceProps {
  onVibesChange?: (isBobbing: boolean) => void;
}

const SmileyFace = ({ onVibesChange }: SmileyFaceProps) => {
  const [isBobbing, setIsBobbing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCopeView, setShowCopeView] = useState(false);
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

  const handleButtonClick = () => {
    const newBobbingState = !isBobbing;
    setIsBobbing(newBobbingState);
    setShowConfetti(newBobbingState); // Show confetti when turning on, hide when turning off
    if (onVibesChange) {
      onVibesChange(newBobbingState);
    }
  };

  const handleCopeClick = () => {
    setShowCopeView(true);
  };

  const handleGoBackClick = () => {
    setShowCopeView(false);
  };

  if (showCopeView) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/copeman.jpeg)' }}
        />
        <button
          onClick={handleGoBackClick}
          className="px-8 py-4 bg-black/70 text-white text-xl font-bold rounded-full hover:bg-black/90 transition-colors z-10"
        >
          GO BACK
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={600}
          gravity={0.2}
        />
      )}
      
      <div className="relative flex items-center justify-center">
        {/* Left shark */}
        {isBobbing && (
          <div className="absolute -left-40 -top-10">
            <svg 
              width="60" 
              height="40" 
              viewBox="0 0 60 40"
              className="animate-bob"
            >
              {/* Shark body */}
              <path
                d="M10 20 C 10 10, 20 5, 30 10 C 40 15, 50 20, 50 25 C 50 30, 40 35, 30 30 C 20 25, 10 30, 10 20 Z"
                fill="#4a90e2"
                stroke="#000"
                strokeWidth="1"
              />
              
              {/* Shark fin */}
              <path
                d="M30 10 L 35 0 L 30 5 L 25 0 Z"
                fill="#4a90e2"
                stroke="#000"
                strokeWidth="1"
              />
              
              {/* Shark eye */}
              <circle cx="25" cy="15" r="2" fill="white" />
              <circle cx="25" cy="15" r="1" fill="black" />
              
              {/* Shark tail */}
              <path
                d="M50 25 L 60 20 L 55 30 L 50 25 Z"
                fill="#4a90e2"
                stroke="#000"
                strokeWidth="1"
              />
            </svg>
          </div>
        )}
        
        {/* Left maraca */}
        {isBobbing && (
          <div className="absolute -left-24 -top-10">
            <svg 
              width="80" 
              height="120" 
              viewBox="0 0 80 120"
              className="animate-shake"
            >
              {/* Maraca handle */}
              <rect x="35" y="80" width="10" height="40" fill="#8B4513" />
              
              {/* Maraca head */}
              <circle cx="40" cy="70" r="30" fill="#FFD700" stroke="#000" strokeWidth="2" />
              
              {/* Maraca details */}
              <circle cx="30" cy="60" r="5" fill="#FF6347" />
              <circle cx="50" cy="65" r="4" fill="#FF6347" />
              <circle cx="35" cy="75" r="3" fill="#FF6347" />
            </svg>
          </div>
        )}
        
        {/* Smiley face */}
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
        
        {/* Right maraca */}
        {isBobbing && (
          <div className="absolute -right-24 -top-10">
            <svg 
              width="80" 
              height="120" 
              viewBox="0 0 80 120"
              className="animate-shake"
            >
              {/* Maraca handle */}
              <rect x="35" y="80" width="10" height="40" fill="#8B4513" />
              
              {/* Maraca head */}
              <circle cx="40" cy="70" r="30" fill="#FFD700" stroke="#000" strokeWidth="2" />
              
              {/* Maraca details */}
              <circle cx="30" cy="60" r="5" fill="#FF6347" />
              <circle cx="50" cy="65" r="4" fill="#FF6347" />
              <circle cx="35" cy="75" r="3" fill="#FF6347" />
            </svg>
          </div>
        )}
        
        {/* Right shark */}
        {isBobbing && (
          <div className="absolute -right-40 -top-10">
            <svg 
              width="60" 
              height="40" 
              viewBox="0 0 60 40"
              className="animate-bob"
            >
              {/* Shark body */}
              <path
                d="M10 20 C 10 10, 20 5, 30 10 C 40 15, 50 20, 50 25 C 50 30, 40 35, 30 30 C 20 25, 10 30, 10 20 Z"
                fill="#4a90e2"
                stroke="#000"
                strokeWidth="1"
              />
              
              {/* Shark fin */}
              <path
                d="M30 10 L 35 0 L 30 5 L 25 0 Z"
                fill="#4a90e2"
                stroke="#000"
                strokeWidth="1"
              />
              
              {/* Shark eye */}
              <circle cx="25" cy="15" r="2" fill="white" />
              <circle cx="25" cy="15" r="1" fill="black" />
              
              {/* Shark tail */}
              <path
                d="M50 25 L 60 20 L 55 30 L 50 25 Z"
                fill="#4a90e2"
                stroke="#000"
                strokeWidth="1"
              />
            </svg>
          </div>
        )}
      </div>
      
      <div className="flex flex-col gap-3">
        <button
          onClick={handleButtonClick}
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          {isBobbing ? 'Stop the Vibes' : 'Start the Vibes'}
        </button>
        
        <button
          onClick={handleCopeClick}
          className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
        >
          COPE
        </button>
      </div>
    </div>
  );
};

export default SmileyFace; 