import React from 'react'

const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "⭐ CallSlice cut our missed calls by 90%. We went from missing 3-4 calls during lunch rush to capturing every single order.",
      author: "Mike Chen",
      role: "Owner, Otaco",
      initial: "M"
    },
    {
      quote: "⭐ Customers say the AI is faster than our staff. My team can actually focus on customers in the restaurant instead of being stuck on the phone.",
      author: "Sarah Martinez",
      role: "Manager, Taco Haven",
      initial: "S"
    },
    {
      quote: "⭐ Order accuracy improved overnight. The AI takes better orders than half my employees. Never makes mistakes, never forgets modifications.",
      author: "David Park",
      role: "Owner, Palace Burgers",
      initial: "D"
    }
  ]

  const stats = [
    { value: "99.8%", label: "Order accuracy" },
    { value: "100%", label: "Call answer rate" },
    { value: "48 hours", label: "Average setup time" }
  ]

  return (
    <section id="testimonials" className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 bg-black text-white text-xs font-semibold rounded-full mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">
            Trusted by restaurant owners
          </h2>
          <p className="text-lg text-gray-600">
            Real results from restaurants like yours
          </p>
        </div>

        {/* Stats First - More Prominent */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-10 pb-10 border-b border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-600 text-[10px] sm:text-xs md:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Enhanced Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-base">
                  {testimonial.initial}
                </div>

                <div>
                  <div className="font-bold text-black text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
