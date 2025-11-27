import React from 'react'

const POSIntegrationBanner = () => {
  const posystems = [
    { name: 'Square', icon: '□' },
    { name: 'Toast', icon: '🍞' },
    { name: 'Clover', icon: '☘' },
    { name: 'Lightspeed', icon: '⚡' },
    { name: 'Revel', icon: '🎯' },
    { name: 'Micros', icon: '🖥' },
    { name: 'Aloha', icon: '🌺' },
    { name: 'OrderUp', icon: '📋' },
  ]

  return (
    <section className="py-6 bg-gradient-to-b from-white to-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="mb-3 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          Integrates with your existing POS
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        <div className="inline-flex animate-scroll-seamless">
          {posystems.map((pos, index) => (
            <div
              key={`set1-${index}`}
              className="flex-shrink-0 mx-6 px-8 py-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{pos.icon}</span>
                <span className="text-base font-semibold text-black whitespace-nowrap">
                  {pos.name}
                </span>
              </div>
            </div>
          ))}
          {posystems.map((pos, index) => (
            <div
              key={`set2-${index}`}
              className="flex-shrink-0 mx-6 px-8 py-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{pos.icon}</span>
                <span className="text-base font-semibold text-black whitespace-nowrap">
                  {pos.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          + many more POS systems supported
        </p>
      </div>
    </section>
  )
}

export default POSIntegrationBanner
