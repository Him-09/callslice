import React from 'react'

const HeroSection = ({ onOpenModal }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-20 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></div>

      {/* Notion-style scribble decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.2] hidden lg:block">
        {/* Top area scribbles */}
        <img 
          src="/scribbles/4.svg" 
          alt=""
          className="absolute top-24 right-16 w-20 h-20 -rotate-12"
        />
        <img 
          src="/scribbles/7.svg" 
          alt=""
          className="absolute top-24 left-1/4 w-14 h-14 rotate-45"
        />
        <img 
          src="/scribbles/45.svg" 
          alt=""
          className="absolute top-20 left-12 w-16 h-16 rotate-6"
        />
        {/* Middle area scribbles */}
        <img 
          src="/scribbles/16.svg" 
          alt=""
          className="absolute top-1/3 left-12 w-18 h-18 -rotate-6"
        />
        
        <img 
          src="/scribbles/28.svg" 
          alt=""
          className="absolute top-2/5 left-1/3 w-12 h-12 -rotate-12"
        />
        <img 
          src="/scribbles/37.svg" 
          alt=""
          className="absolute top-1/2 right-1/4 w-14 h-14 rotate-6"
        />
        <img 
          src="/scribbles/scribble-01.svg" 
          alt=""
          className="absolute top-2/4 right-14 w-14 h-14 rotate-12"
        />
        <img 
          src="/scribbles/scribble-15.svg" 
          alt=""
          className="absolute top-2/5 right-1/3 w-16 h-16 -rotate-6"
        />
        {/* Bottom area scribbles */}
        <img 
          src="/scribbles/39.svg" 
          alt=""
          className="absolute bottom-16 left-16 w-20 h-20 rotate-12"
        />
        <img 
          src="/scribbles/44.svg" 
          alt=""
          className="absolute bottom-20 right-28 w-16 h-16 -rotate-12"
        />
        <img 
          src="/scribbles/49.svg" 
          alt=""
          className="absolute bottom-24 right-1/3 w-12 h-12 rotate-45"
        />
        <img 
          src="/scribbles/scribble-30.svg" 
          alt=""
          className="absolute bottom-28 left-1/4 w-14 h-14 -rotate-12"
        />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center space-y-4 sm:space-y-6">
          {/* Beta badge with scribble - enhanced */}
          <div className="relative inline-block">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold bg-black text-white shadow-lg">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-white"></span>
              </span>
              <span className="tracking-wide">NOW IN PILOT</span>
              <span className="bg-gradient-to-r from-[#F63A6E] to-[#2979FF] text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black">5 SPOTS LEFT</span>
            </div>
            {/* Scribble next to badge */}
            <img 
              src="/scribbles/2.svg" 
              alt=""
              className="absolute -right-16 -top-0 w-14 h-14 rotate-12 opacity-20 hidden lg:block"
            />
          </div>
          
          {/* Main headline */}
          <h1 className="text-6xl lg:text-7xl font-bold text-black mb-3 sm:mb-4 leading-[1.1] sm:leading-[1.05] tracking-tight px-2">
            <span className="block mb-1 sm:mb-2">Stop losing pizza orders to</span>
            <span className="bg-gradient-to-r from-[#F63A6E] to-[#2979FF] bg-clip-text text-transparent">
              missed 
            </span>
            <span className="mb-1 sm:mb-2"> calls</span>
          </h1>
          
          {/* Subheadline - enhanced */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Your AI assistant answers every call instantly, takes accurate orders, and sends them straight into your POS—so your team can focus on cooking.
          </p>
          
          {/* CTA buttons - enhanced spacing */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <button
              onClick={() => scrollToSection('demo')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white bg-black hover:bg-gray-900 hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
            >
              Hear it in action
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-black bg-white border-2 border-gray-300 hover:border-black hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
            >
              How It Works →
            </button>
          </div>

          {/* Simple stats - minimalist 
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 pt-12 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-black font-medium">Setup in 48 hours</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-black font-medium">Works with all POS</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-black font-medium">No commitment</span>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
