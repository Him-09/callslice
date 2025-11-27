import React, { useState, useEffect } from 'react'

const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleCtaClick = () => {
    setIsMobileMenuOpen(false)
    if (onOpenModal) {
      onOpenModal()
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in-down ${
          isScrolled 
            ? 'bg-white border-b border-gray-200 shadow-sm py-3' 
            : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/icon.png" 
                alt="CallSlice Icon" 
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <span className="text-lg sm:text-2xl font-bold text-black -ml-1 sm:-ml-2">CallSlice</span>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
              <button 
                onClick={() => scrollToSection('demo')} 
                className="px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium text-sm"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium text-sm"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium text-sm"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium text-sm"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium text-sm"
              >
                FAQ
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center ml-0 lg:ml-0">
              <button 
                onClick={handleCtaClick}
                className="px-6 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#F63A6E] to-[#2979FF] hover:shadow-lg transition-all text-sm"
              >
                Join the pilot
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl">
            <div className="p-6 space-y-4 mt-16">
              <button 
                onClick={() => scrollToSection('demo')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all font-medium"
              >
                FAQ
              </button>
              
              <div className="pt-4 border-t border-gray-100">
                <button 
                  onClick={handleCtaClick}
                  className="block w-full px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-[#F63A6E] to-[#2979FF] hover:shadow-lg transition-all"
                >
                  Join the pilot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
