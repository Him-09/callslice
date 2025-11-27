import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      title: "Natural Ordering Experience",
      description: "Talks to customers like a real staff member. No IVRs. No robots.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Perfect Accuracy",
      description: "Gets sizes, toppings, and special requests right—every time.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Always Available",
      description: "Never misses a call. Never puts customers on hold. 24/7 coverage.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "POS Synced Instantly",
      description: "Orders go straight into Square, Toast, or Clover. No manual entry.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block px-4 py-1 bg-black text-white text-xs font-semibold rounded-full mb-3 sm:mb-4">
            FEATURES
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3 px-4">
            Built for busy restaurants
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to handle nonstop phone orders—without overwhelming your staff
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border-2 border-gray-200 hover:border-black bg-white transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F63A6E] to-[#2979FF] transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
