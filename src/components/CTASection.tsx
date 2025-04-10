'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const CallToActionSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full overflow-hidden py-20 text-right" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964"
          alt="סטודיו צילום רקע"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col items-end">
          {/* Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg rounded-2xl backdrop-blur-md bg-white/10 p-8 border border-white/20 shadow-xl"
          >
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 font-bold text-4xl md:text-5xl text-white"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              הרגעים שלך, <span className="text-[#96CEB4]">האומנות שלנו</span>
            </motion.h2>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 text-lg text-white/90 leading-relaxed"
            >
              אנו מתמחים בלתפוס את הרגעים המיוחדים בחייך בצורה אומנותית ומקצועית. הצוות המיומן שלנו יוצר חוויית צילום בלתי נשכחת שתשאיר לך זכרונות לכל החיים.
            </motion.p>

            {/* CTA Button - Neumorphic Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block"
            >
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group"
              >
                <div 
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    isHovered 
                      ? 'bg-[#D4A5A5] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.2)]' 
                      : 'bg-[#96CEB4] shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.1)]'
                  }`}
                ></div>
                <span 
                  className={`relative block px-8 py-4 text-xl font-bold rounded-xl transition-all duration-300 ${
                    isHovered ? 'text-white transform scale-105' : 'text-white'
                  }`}
                >
                  קבע תור עכשיו
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-[#96CEB4]/30 to-[#D4A5A5]/30 blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-10 -right-20 w-40 h-40 rounded-full bg-gradient-to-bl from-[#D4A5A5]/20 to-[#96CEB4]/20 blur-xl"
      />
    </section>
  );
};

export default CallToActionSection;