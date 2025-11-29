import React, { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How long does setup actually take?",
      answer: "24 hours from demo to live. We handle everything: menu configuration, POS integration, and testing. You just need to forward your phone line when you're ready."
    },
    {
      question: "Does the virtual assistant understand accents?",
      answer: "Yes. CallSlice is trained on thousands of real restaurant calls and handles strong accents, background noise, and casual slang."
    },
    {
      question: "What if customers have complex orders?",
      answer: "Our virtual assistant handles customizations, special requests, and modifications just like a trained employee. It confirms every detail before finalizing the order."
    },
    {
      question: "Does it work with my POS system?",
      answer: "Yes. We integrate with Square, Toast, Clover, and most major POS systems. If you use something else, we can build a custom integration."
    },
    {
      question: "What happens if the virtual assistant can't handle a call?",
      answer: "In rare cases where the virtual assistant needs help, it seamlessly transfers to your staff. We also monitor every call and continuously improve the system."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. No long-term contracts. Cancel with 30 days notice if it's not working for you."
    },
    {
      question: "How many calls can it handle at once?",
      answer: "Unlimited. Unlike human staff, the virtual assistant can handle dozens of simultaneous calls during rush hour without any quality drop."
    }
  ]

  return (
    <section id="faq" className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          {/* Section badge */}
          <div className="inline-block mb-4">
            <span className="bg-black text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              FAQ
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">
            Common questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-black hover:shadow-lg transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-black pr-8 text-sm">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
