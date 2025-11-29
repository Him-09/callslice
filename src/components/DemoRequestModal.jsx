import React, { useState } from 'react'

const DemoRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    phone: '',
    pos: '',
    posOther: '',
    menuLink: '',
    menuFile: null,
    notes: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const validatePhoneNumber = (phone) => {
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '')
    
    // Check if it has 10 digits (US format) or 11 digits (with country code)
    if (digitsOnly.length === 10 || digitsOnly.length === 11) {
      return true
    }
    return false
  }

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '')
    
    // Format as (XXX) XXX-XXXX
    if (digitsOnly.length <= 3) {
      return digitsOnly
    } else if (digitsOnly.length <= 6) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`
    } else if (digitsOnly.length <= 10) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`
    } else {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate phone number before submission
    if (!validatePhoneNumber(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit phone number')
      return
    }
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Prepare form data for file upload
      const submitData = new FormData()
      submitData.append('name', formData.name)
      submitData.append('restaurantName', formData.restaurantName)
      submitData.append('phone', formData.phone)
      submitData.append('pos', formData.pos === 'Other' ? formData.posOther : formData.pos || 'Not specified')
      submitData.append('menuLink', formData.menuLink || 'N/A')
      submitData.append('notes', formData.notes || 'N/A')
      submitData.append('_subject', `New Demo Request - ${formData.restaurantName}`)
      submitData.append('submittedAt', new Date().toLocaleString())
      
      if (formData.menuFile) {
        submitData.append('menuFile', formData.menuFile)
      }
      
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mwpwgydj', {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setFormData({ name: '', restaurantName: '', phone: '', pos: '', posOther: '', menuLink: '', menuFile: null, notes: '' })
          setPhoneError('')
          setSubmitError('')
        }, 2000)
      } else {
        setSubmitError('Failed to submit application. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'menuFile' && files) {
      setFormData({ ...formData, menuFile: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 pr-8">Get Your Virtual Assistant Ready</h3>
            <p className="text-gray-600 text-sm mb-4 sm:mb-5">
              Fill out this short form. We'll text you your dedicated demo number once your system is prepared.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Your Name
                </label>
                <p className="text-xs text-gray-500 mb-2">So we know who to contact.</p>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F63A6E] focus:border-transparent outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Restaurant Name
                </label>
                <p className="text-xs text-gray-500 mb-2">Used for greeting callers.</p>
                <input
                  type="text"
                  name="restaurantName"
                  required
                  value={formData.restaurantName}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F63A6E] focus:border-transparent outline-none transition-all"
                  placeholder="Joe's Burger Shop"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Owner / Manager Phone Number
                </label>
                <p className="text-xs text-gray-500 mb-2">We text you your demo number once it's ready.</p>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value)
                    setFormData({ ...formData, phone: formatted })
                    setPhoneError('')
                  }}
                  className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-[#F63A6E] focus:border-transparent outline-none transition-all ${
                    phoneError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(555) 123-4567"
                  maxLength="14"
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  POS System
                </label>
                <p className="text-xs text-gray-500 mb-2">If you're not sure, choose "Other" — we'll handle it.</p>
                <select
                  name="pos"
                  required
                  value={formData.pos}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F63A6E] focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select your POS system</option>
                  <option value="Square">Square</option>
                  <option value="Clover">Clover</option>
                  <option value="Toast">Toast</option>
                  <option value="Lightspeed">Lightspeed</option>
                  <option value="Other">Other / Not sure</option>
                </select>
              </div>

              {formData.pos === 'Other' && (
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Please specify POS system</label>
                  <input
                    type="text"
                    name="posOther"
                    value={formData.posOther}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F63A6E] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your POS system name or leave blank"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Menu Link or Upload Menu
                </label>
                <p className="text-xs text-gray-500 mb-2">We sync your menu so the virtual assistant can take real orders.</p>
                <input
                  type="url"
                  name="menuLink"
                  value={formData.menuLink}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F63A6E] focus:border-transparent outline-none transition-all mb-2"
                  placeholder="https://yourrestaurant.com/menu"
                />
                <div className="text-center text-xs text-gray-500 mb-2">OR</div>
                <input
                  type="file"
                  name="menuFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F63A6E] focus:border-transparent outline-none transition-all file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-[#F63A6E] hover:file:bg-pink-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Notes (Optional)
                </label>
                <p className="text-xs text-gray-500 mb-2">Allergies, delivery areas, custom menu items — anything we should know.</p>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F63A6E] focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Special instructions, delivery zones, etc."
                />
              </div>

              {submitError && (
                <div className="text-red-500 text-xs p-2 bg-red-50 rounded-lg">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#F63A6E] to-[#2979FF] text-white font-semibold py-3 text-sm rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Demo Number'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">Request Received!</h3>
            <p className="text-gray-600 text-sm">We're setting up your virtual assistant. You'll receive a text with your demo number within 24 hours.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DemoRequestModal
