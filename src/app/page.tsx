'use client';

import { useState } from 'react';
import SmileyFace from '@/components/Shark'

export default function Home() {
  const [isVibesOn, setIsVibesOn] = useState(false);

  const handleVibesChange = (isBobbing: boolean) => {
    setIsVibesOn(isBobbing);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/copeman.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/80 to-blue-200/80 z-0" />
      
      {/* Neon borders - only show when vibes are on */}
      {isVibesOn && (
        <>
          {/* Neon purple outer border */}
          <div className="absolute inset-0 border-4 border-purple-500 rounded-lg m-4" style={{ boxShadow: '0 0 10px #9333ea, 0 0 20px #9333ea, 0 0 30px #9333ea, inset 0 0 10px #9333ea' }}></div>
          
          {/* Neon green border */}
          <div className="absolute inset-0 border-4 border-green-400 rounded-lg m-12" style={{ boxShadow: '0 0 10px #4ade80, 0 0 20px #4ade80, 0 0 30px #4ade80, inset 0 0 10px #4ade80' }}></div>
          
          {/* Neon pink border */}
          <div className="absolute inset-0 border-4 border-pink-500 rounded-lg m-20" style={{ boxShadow: '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899, inset 0 0 10px #ec4899' }}></div>
          
          {/* Neon blue border */}
          <div className="absolute inset-0 border-4 border-blue-500 rounded-lg m-28" style={{ boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6, inset 0 0 10px #3b82f6' }}></div>
          
          {/* Neon yellow border */}
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-lg m-36" style={{ boxShadow: '0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15, inset 0 0 10px #facc15' }}></div>
          
          {/* Neon orange border */}
          <div className="absolute inset-0 border-4 border-orange-500 rounded-lg m-44" style={{ boxShadow: '0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316, inset 0 0 10px #f97316' }}></div>
          
          {/* Neon red border */}
          <div className="absolute inset-0 border-4 border-red-500 rounded-lg m-52" style={{ boxShadow: '0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444, inset 0 0 10px #ef4444' }}></div>
          
          {/* Neon indigo border */}
          <div className="absolute inset-0 border-4 border-indigo-500 rounded-lg m-60" style={{ boxShadow: '0 0 10px #6366f1, 0 0 20px #6366f1, 0 0 30px #6366f1, inset 0 0 10px #6366f1' }}></div>
          
          {/* Neon teal border */}
          <div className="absolute inset-0 border-4 border-teal-500 rounded-lg m-68" style={{ boxShadow: '0 0 10px #14b8a6, 0 0 20px #14b8a6, 0 0 30px #14b8a6, inset 0 0 10px #14b8a6' }}></div>
          
          {/* Neon cyan border */}
          <div className="absolute inset-0 border-4 border-cyan-500 rounded-lg m-76" style={{ boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4, inset 0 0 10px #06b6d4' }}></div>
          
          {/* Neon lime border */}
          <div className="absolute inset-0 border-4 border-lime-500 rounded-lg m-84" style={{ boxShadow: '0 0 10px #84cc16, 0 0 20px #84cc16, 0 0 30px #84cc16, inset 0 0 10px #84cc16' }}></div>
          
          {/* Neon emerald border */}
          <div className="absolute inset-0 border-4 border-emerald-500 rounded-lg m-92" style={{ boxShadow: '0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981, inset 0 0 10px #10b981' }}></div>
          
          {/* Neon violet border */}
          <div className="absolute inset-0 border-4 border-violet-500 rounded-lg m-100" style={{ boxShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6, inset 0 0 10px #8b5cf6' }}></div>
        </>
      )}
      
      <div className="w-full text-center py-8 z-10">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse relative" style={{ textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff' }}>
          {isVibesOn && <span className="absolute -inset-1 bg-black rounded-lg blur-sm"></span>}
          <span className="relative">VIBESWIM</span>
        </h1>
      </div>
      <div className="z-10">
        <SmileyFace onVibesChange={handleVibesChange} />
      </div>
    </main>
  )
}
