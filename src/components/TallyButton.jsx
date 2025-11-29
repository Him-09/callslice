import React, { useState } from 'react'

const TallyButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Mobile & Desktop: Circle button at bottom right */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
          {/* Pulsing ring effect */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#F63A6E] to-[#2979FF] opacity-30 animate-ping" style={{ animationDuration: '2s' }}></div>
          
          {/* Gradient border ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F63A6E] to-[#2979FF] p-[2px]">
            <div className="w-full h-full rounded-full bg-white"></div>
          </div>
          
          {/* Rotating circular text */}
          <svg 
            className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 animate-spin-slow" 
            style={{ 
              animationDuration: isHovered ? '6s' : '12s'
            }} 
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[9px] sm:text-[9px] font-bold uppercase fill-slate-700" letterSpacing="0.8">
              <textPath href="#circlePath" startOffset="0%">
                Call Demo • Try it • Call Demo • Try it •
              </textPath>
            </text>
          </svg>
          
          {/* Button in center */}
          <a
            href="tel:+19789812243"
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#F63A6E] to-[#2979FF] hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-100 hover:sm:scale-105 transition-all duration-300 flex items-center justify-center group"
            aria-label="Call demo number: +1 978 981 2243"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* White glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* Phone icon */}
            <svg 
              className="w-7 h-7 sm:w-7 sm:h-7 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            
            {/* Tooltip on hover */}
            <div className="absolute -top-14 right-0 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
              Call +1 (978) 981-2243
              <div className="absolute -bottom-1 right-6 w-2 h-2 bg-slate-900 transform rotate-45"></div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default TallyButton
