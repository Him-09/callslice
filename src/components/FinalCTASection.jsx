import React from 'react'

const FinalCTASection = ({ onOpenModal }) => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F63A6E] to-[#2979FF] relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Every missed call is a missed order. Stop losing them.
        </h2>
        
        <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto font-medium">
          Join our pilot program and get 2 weeks free + 35% lifetime discount
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button
            onClick={onOpenModal}
            className="px-10 py-4 rounded-xl font-bold text-base text-black bg-white border-white hover:border-black hover:shadow-2xl hover:scale-105 transition-all"
          >
            Join the CallSlice Pilot →
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20" strokeWidth={0.5}>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white font-bold text-[9px] sm:text-[10px] md:text-xs text-center leading-tight">2 weeks free trial</span>
          </div>
          
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white font-bold text-[9px] sm:text-[10px] md:text-xs text-center leading-tight">35% discount</span>
          </div>
          
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white font-bold text-[9px] sm:text-[10px] md:text-xs text-center leading-tight">Cancel anytime</span>
          </div>
          
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white font-bold text-[9px] sm:text-[10px] md:text-xs text-center leading-tight">Free setup</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
