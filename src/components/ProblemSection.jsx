import React from 'react'

const ProblemSection = ({ onOpenModal }) => {
  const problems = [
    {
      title: "Lost Revenue",
      description: "Every missed call is a lost sale. Busy signals during lunch rush send customers straight to competitors.",
      stat: "$27,000+",
      statLabel: "lost annually per location",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Overwhelmed Staff",
      description: "Your best employees are stuck on hold, repeating the menu, when they should be serving customers.",
      stat: "40%",
      statLabel: "of peak-hour time wasted on phones",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Order Errors",
      description: "Noisy kitchens, accents, bad connections—mistakes happen. Each one costs you money and damages trust.",
      stat: "$15-$50",
      statLabel: "average cost per error",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ]

  return (
    <section id="problem" className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          {/* Section badge */}
          <div className="inline-block mb-4">
            <span className="bg-black text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              THE PROBLEM
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">
            You're losing orders every time the phone rings and no one picks up
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every missed call, every mistake, every rushed conversation—it all adds up to real money lost every week.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>

              <h3 className="text-xl font-bold text-black mb-2">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-3 min-h-[60px]">
                {problem.description}
              </p>
              
              {/* Stats pill */}
              <div className="pt-3 border-t-2 border-gray-100">
                <div className="text-xl font-black text-black mb-1">
                  {problem.stat}
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {problem.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProblemSection
