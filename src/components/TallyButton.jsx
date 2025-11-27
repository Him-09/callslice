import React from 'react'

const TallyButton = () => {
  return (
    <>
      {/* Mobile: Circle button at bottom right with jiggle */}
      <div className="sm:hidden fixed bottom-6 right-6 z-40">
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Rotating circular text */}
          <svg className="absolute inset-0 w-20 h-20 animate-spin-slow" style={{ animationDuration: '10s' }} viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[11px] fill-black font-bold uppercase tracking-wider">
              <textPath href="#circlePath" startOffset="0%">
                Tell us • Tell us • Tell us • Tell us • Tell us • Tell us • Tell us • Tell us
              </textPath>
            </text>
          </svg>
          
          {/* Button in center */}
          <button
            data-tally-open="GxvJ9z"
            data-tally-overlay="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            data-tally-auto-close="0"
            data-tally-form-events-forwarding="1"
            className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#F63A6E] to-[#2979FF] text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-jiggle"
            aria-label="Open feedback form"
          >
            <span className="text-3xl items-center group-hover:scale-125 transition-transform">👋</span>
          </button>
        </div>
      </div>

      {/* Desktop: Vertical tab on right edge */}
      <button
        data-tally-open="GxvJ9z"
        data-tally-overlay="1"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        data-tally-auto-close="0"
        data-tally-form-events-forwarding="1"
        className="hidden sm:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-white px-3 py-6 rounded-l-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg flex-col items-center gap-2 group border-2 border-r-0 border-gradient"
        style={{ 
          writingMode: 'vertical-rl',
          borderImage: 'linear-gradient(to right, #F63A6E, #2979FF) 1'
        }}
        aria-label="Open feedback form"
      >
        <span className="bg-gradient-to-r from-[#F63A6E] to-[#2979FF] bg-clip-text text-transparent">Tell us</span>
      </button>
    </>
  )
}

export default TallyButton
