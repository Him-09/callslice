import React from 'react'

const PricingSection = ({ onOpenModal }) => {
  return (
    <section id="pricing" className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white border-y-2 border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-black text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              PRICING
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3 px-4">
            🔥 Limited to 10 restaurants
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Free for 2 weeks + 35% lifetime discount. Join the early access program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Pricing */}
          <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-5 sm:p-6 hover:border-black transition-all">
            <div className="inline-block px-3 sm:px-4 py-2 bg-black text-white text-xs font-bold rounded-full mb-3 sm:mb-4 uppercase tracking-wider">
              PILOT PARTNER PROGRAM
            </div>
            
            <div className="mb-3 sm:mb-4">
              <div className="text-4xl sm:text-5xl font-black text-black mb-2">
                Free
              </div>
              <div className="text-base sm:text-lg text-gray-700 font-bold mb-2">
                for 2 weeks trial
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Then <span className="font-black text-black">$98/month</span> if you decide to continue
              </div>
              <div className="text-xs text-gray-400 line-through">
                Regular price: $149/month
              </div>
            </div>
            
            <div className="px-3 sm:px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl mb-4 sm:mb-6">
              <p className="text-xs text-black font-medium">
                <span className="font-black">Pilot partners get:</span> Free setup + 35% lifetime discount
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#F63A6E] to-[#2979FF] hover:shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
            >
              Apply for Pilot Program
            </button>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-sm sm:text-base font-black text-black uppercase tracking-wide mb-3 sm:mb-4">What's Included:</h3>
            {[
              { feature: "Full setup + integration with your POS", detail: "Square, Toast, Clover & more — we handle everything" },
              { feature: "35% lifetime discount after pilot", detail: "Keep $98/month forever (regular $149/month)" },
              { feature: "Unlimited phone orders", detail: "Handle as many calls as you need" },
              { feature: "Multi-location support", detail: "Perfect for restaurant chains" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl border-2 border-gray-200 hover:border-black hover:shadow-lg transition-all bg-white">
                <svg className="w-4 h-4 text-black flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="text-gray-900 text-sm font-bold block mb-0.5">{item.feature}</span>
                  <p className="text-gray-600 text-xs">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
