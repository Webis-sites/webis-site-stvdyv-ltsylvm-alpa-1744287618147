'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200,
        delay: 0.8
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95,
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)"
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-100 rtl" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photography-studio-background.jpg" 
          alt="סטודיו לצילום רקע"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full max-w-4xl">
          {/* Glassmorphism Card */}
          <motion.div 
            className="mx-auto rounded-3xl backdrop-blur-md bg-white/20 p-8 sm:p-12 border border-white/30 shadow-xl"
            style={{
              backdropFilter: 'blur(12px)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)'
            }}
          >
            {/* Logo */}
            <motion.div 
              className="mb-8 text-center"
              variants={itemVariants}
            >
              <h3 className="text-xl font-medium text-white/90">סטודיו לצילום אלפא</h3>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="mb-6 text-center text-4xl sm:text-5xl md:text-6xl font-bold text-white"
              variants={itemVariants}
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
            >
              סטודיו לצילום מוביל בישראל
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="mb-10 text-center text-xl sm:text-2xl text-white/90"
              variants={itemVariants}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button - Neumorphic Style */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-[#96CEB4] to-[#D4A5A5] hover:from-[#8BC0A6] hover:to-[#C99696] focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:ring-offset-2 focus:ring-offset-gray-100"
                style={{
                  boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.1)',
                }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                קבע תור עכשיו
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Neumorphic Decorative Elements */}
          <motion.div 
            className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 1 }}
            style={{
              background: 'linear-gradient(135deg, #96CEB4 0%, #D4A5A5 100%)',
              filter: 'blur(60px)'
            }}
          />
          <motion.div 
            className="absolute -top-20 -right-20 h-40 w-40 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 1 }}
            style={{
              background: 'linear-gradient(135deg, #D4A5A5 0%, #96CEB4 100%)',
              filter: 'blur(60px)'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}