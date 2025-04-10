'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Custom hook for handling scroll behavior
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return scrollPosition;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;
  
  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && e.target.id === 'mobile-menu-overlay') {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  // Navigation links
  const navLinks = [
    { name: 'דף הבית', href: '/' },
    { name: 'שירותים', href: '/services' },
    { name: 'תיק עבודות', href: '/portfolio' },
    { name: 'אודות', href: '/about' },
    { name: 'צור קשר', href: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/80 backdrop-blur-md shadow-md' 
          : 'py-4 bg-transparent'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="w-10 h-10 relative mr-2 bg-gradient-to-br from-primary-light to-primary rounded-lg shadow-neumorphic">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">א</div>
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                סטודיו לצילום אלפא
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative mx-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-base group"
              >
                {link.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/booking" 
              className="mr-4 px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-neumorphic hover:shadow-neumorphic-hover active:shadow-neumorphic-pressed transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
            >
              קבע תור עכשיו
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/90 shadow-neumorphic hover:shadow-neumorphic-hover active:shadow-neumorphic-pressed transition-all duration-200"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            <span className="sr-only">{isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block h-0.5 w-6 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              ></span>
              <span 
                className={`block h-0.5 w-6 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 mt-1 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block h-0.5 w-6 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 mt-1 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            id="mobile-menu-overlay"
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-3/4 h-full bg-white/90 backdrop-blur-md shadow-lg p-6 pt-24 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <Link 
                    href="/booking" 
                    className="block w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-neumorphic hover:shadow-neumorphic-hover active:shadow-neumorphic-pressed transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    קבע תור עכשיו
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;