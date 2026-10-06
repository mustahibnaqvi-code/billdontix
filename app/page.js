import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import RevenueRecoverySection from '@/components/sections/RevenueRecoverySection';
import TrustSignalsSection from '@/components/sections/TrustSignalsSection';
import SoftwareIntegrationsSection from '@/components/sections/SoftwareIntegrationsSection';
import ProblemSection from '@/components/sections/ProblemSection';
import CompareSection from '@/components/sections/CompareSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SpecialtiesSection from '@/components/sections/SpecialtiesSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import ExperienceCredentialsSection from '@/components/sections/ExperienceCredentialsSection';
import ROICalculatorSection from '@/components/sections/ROICalculatorSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import LeadFormSection from '@/components/sections/LeadFormSection';

export const metadata = {
  title: 'Revix Plus — Expert Dental Billing Services',
  description:
    'Expert dental billing and claims recovery services designed to maximize collections and accelerate payments for growing practices. 97.4% first-pass clean claims.',
};

export default function HomePage() {
  return (
    <>
      <Header activePage="Home" />
      <main>
        {/* 1 — Hero */}
        <HeroSection />

        {/* 2 — Revenue Recovery stats + CTAs */}
        <RevenueRecoverySection />

        {/* 3 — Trust Signals (3 cards) */}
        <TrustSignalsSection />

        {/* 4 — Software Integrations marquee */}
        <SoftwareIntegrationsSection />

        {/* 5 — Problem section (4 problem cards with progress bars) */}
        <ProblemSection />

        {/* 6 — In-house vs Revix Plus comparison table */}
        <CompareSection />

        {/* 7 — Services grid (6 service cards) */}
        <ServicesSection />

        {/* 8 — Testimonials */}
        <TestimonialsSection />

        {/* 9 — Specialties grid */}
        <SpecialtiesSection />

        {/* 10 — Why Choose (analytics card + accordion) */}
        <WhyChooseSection />

        {/* 11 — Experience & Credentials */}
        <ExperienceCredentialsSection />

        {/* 12 — ROI Calculator */}
        <ROICalculatorSection />

        {/* 13 — FAQ accordion */}
        <FAQSection />

        {/* 14 — Final CTA (glassmorphism card) */}
        <FinalCTASection />

        {/* 15 — Lead capture form */}
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
