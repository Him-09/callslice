import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import DemoRequestModal from '../components/DemoRequestModal'
import TallyButton from '../components/TallyButton'
import HeroSection from '../components/HeroSection'
import POSIntegrationBanner from '../components/POSIntegrationBanner'
import VoiceDemoSection from '../components/VoiceDemoSection'
import ProblemSection from '../components/ProblemSection'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import SocialProofSection from '../components/SocialProofSection'
import PricingSection from '../components/PricingSection'
import FAQSection from '../components/FAQSection'
import FinalCTASection from '../components/FinalCTASection'
import FooterSection from '../components/FooterSection'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <div className="animate-fade-in-small" style={{ animationDelay: '0s' }}>
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <POSIntegrationBanner />
      </div>
      
      <div className="scroll-animate">
        <VoiceDemoSection />
      </div>
      
      <div>
        <ProblemSection onOpenModal={() => setIsModalOpen(true)} />
      </div>
      
      <div>
        <FeaturesSection onOpenModal={() => setIsModalOpen(true)} />
      </div>
      
      <div>
        <HowItWorksSection onOpenModal={() => setIsModalOpen(true)} />
      </div>
      
      <div>
        <SocialProofSection />
      </div>
      
      <div>
        <PricingSection onOpenModal={() => setIsModalOpen(true)} />
      </div>
      
      <div>
        <FAQSection />
      </div>
      
      <div>
        <FinalCTASection onOpenModal={() => setIsModalOpen(true)} />
      </div>
      
      <div>
        <FooterSection onOpenModal={() => setIsModalOpen(true)} />
      </div>
      
      <DemoRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <TallyButton />
    </div>
  )
}

export default LandingPage
