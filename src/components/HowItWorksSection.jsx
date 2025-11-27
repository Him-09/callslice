import React from 'react'

const HowItWorksSection = ({ onOpenModal }) => {
  const steps = [
    {
      number: "1",
      title: "Connect your number",
      description: "We port or forward your restaurant phone number. Takes less than 5 minutes.",
      detail: "Simple call forwarding from your existing number. No new phone lines or equipment needed."
    },
    {
      number: "2",
      title: "We handle setup",
      description: "We build your menu, train the AI on your items, and configure your POS—done for you.",
      detail: "Seamless integration with Square, Toast, Clover, and 10+ other systems."
    },
    {
      number: "3",
      title: "Start taking orders",
      description: "Your AI assistant starts taking real orders within 24 hours.",
      detail: "Handle unlimited calls 24/7 while your team focuses on serving great food."
    }
  ]

  return (
    <section id="how-it-works" className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          {/* Section badge */}
          <div className="inline-block mb-4">
            <span className="bg-black text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              HOW IT WORKS
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">
            Live in 24 hours
          </h2>
          <p className="text-lg text-gray-600">
            Simple setup, powerful results
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-black via-gray-300 to-black rounded-full hidden md:block"></div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white text-xl font-bold shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                <div className="flex-1 pt-2 p-6 rounded-2xl bg-gray-50 border-2 border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-black mb-2 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm mb-1 font-medium">
                    {step.description}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 pt-6">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 rounded-xl font-bold text-white bg-black hover:shadow-2xl hover:scale-105 transition-all text-base"
          >
            Join our Program
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
