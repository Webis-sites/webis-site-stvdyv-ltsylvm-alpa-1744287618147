'use client';

import React from 'react';
import Layout from '@/components/Layout';
import NavigationHeader from '@/components/NavigationHeader';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ContactForm />
      
      <FAQAccordion />
      
      <ProcessSection />
      
      <AboutSection />
      
      <TestimonialsCarousel />
      
      <PortfolioGallery />
      
      <ServicesSection />
      
      <HeroSection />
      
      <NavigationHeader />
      
      <Layout />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
      </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 סטודיו לצילום אלפא. webis
        </div>
      </footer>
    </div>
  );
}