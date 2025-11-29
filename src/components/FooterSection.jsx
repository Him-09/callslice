import React from 'react'

const FooterSection = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t-2 border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-0 mb-3">
              <img 
                src="/icon.png" 
                alt="CallSlice Icon" 
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold text-black -ml-2">CallSlice</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md font-medium">
              AI-powered phone ordering system that helps restaurants capture every call, eliminate errors, and free up staff.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-3 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-black font-medium transition-colors">
                  Demo
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-black font-medium transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-black font-medium transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-black font-medium transition-colors">
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-3 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-black font-medium transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black font-medium transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black font-medium transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t-2 border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 font-medium">
            © 2025 CallSlice. All rights reserved.
          </p>
          
          
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
