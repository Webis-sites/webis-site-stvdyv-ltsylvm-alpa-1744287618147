// components/Footer.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 pt-12 pb-6 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col items-end">
              <div className="mb-4 neumorphic-logo p-4 rounded-xl">
                <Image 
                  src="/logo.png" 
                  alt="סטודיו צילום" 
                  width={120} 
                  height={60} 
                  className="object-contain"
                />
              </div>
              <p className="text-right mb-4 text-gray-700">
                סטודיו צילום מקצועי המתמחה בצילומי פורטרט, אירועים ונוף. אנו מחויבים לאיכות ויצירתיות בכל תמונה.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-right border-b-2 border-primary pb-2">צור קשר</h3>
            <ul className="text-right">
              <li className="mb-2">
                <span className="block font-semibold">כתובת:</span>
                <address className="not-italic">רחוב הצלמים 42, תל אביב</address>
              </li>
              <li className="mb-2">
                <span className="block font-semibold">טלפון:</span>
                <motion.a 
                  href="tel:+972-3-1234567" 
                  className="glassmorphism-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="מספר טלפון"
                >
                  03-1234567
                </motion.a>
              </li>
              <li className="mb-2">
                <span className="block font-semibold">דוא"ל:</span>
                <motion.a 
                  href="mailto:info@photostudio.co.il" 
                  className="glassmorphism-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="כתובת אימייל"
                >
                  info@photostudio.co.il
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Mini Sitemap */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-right border-b-2 border-primary pb-2">ניווט מהיר</h3>
            <ul className="text-right">
              {['דף הבית', 'גלריה', 'שירותים', 'אודות', 'מחירון', 'צור קשר'].map((item, index) => (
                <li key={index} className="mb-2">
                  <motion.div
                    whileHover={{ x: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link href={`/${item === 'דף הבית' ? '' : item.toLowerCase()}`} className="neumorphic-link">
                      {item}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-right border-b-2 border-primary pb-2">עקבו אחרינו</h3>
            <div className="flex justify-end gap-4 mb-6">
              {[
                { icon: <FaFacebook />, url: 'https://facebook.com', label: 'פייסבוק' },
                { icon: <FaInstagram />, url: 'https://instagram.com', label: 'אינסטגרם' },
                { icon: <FaTwitter />, url: 'https://twitter.com', label: 'טוויטר' },
                { icon: <FaPinterest />, url: 'https://pinterest.com', label: 'פינטרסט' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`עקבו אחרינו ב${social.label}`}
                  className="neumorphic-social p-3 rounded-full flex items-center justify-center text-xl"
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="glassmorphism-newsletter p-4 rounded-xl">
              <h4 className="text-lg font-bold mb-2 text-right">הירשמו לניוזלטר</h4>
              <form className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="הזינו את כתובת האימייל שלכם" 
                  className="p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
                  dir="rtl"
                />
                <motion.button 
                  type="submit" 
                  className="neumorphic-button py-2 px-4 rounded-lg text-white bg-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  הרשמה
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} סטודיו צילום. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// app/globals.css (add these styles)
/*
:root {
  --primary: #96CEB4;
  --secondary: #D4A5A5;
}

.neumorphic-link {
  position: relative;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(145deg, #f0f0f0, #e6e6e6);
  box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
  transition: all 0.3s ease;
}

.neumorphic-link:hover {
  box-shadow: inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff;
  color: var(--primary);
}

.neumorphic-button {
  background: var(--primary);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.neumorphic-button:hover {
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.15), -7px -7px 15px rgba(255, 255, 255, 0.6);
}

.neumorphic-button:active {
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px rgba(255, 255, 255, 0.5);
}

.neumorphic-social {
  background: linear-gradient(145deg, #f0f0f0, #e6e6e6);
  box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
  transition: all 0.3s ease;
}

.neumorphic-social:hover {
  color: var(--primary);
}

.neumorphic-logo {
  background: linear-gradient(145deg, #f0f0f0, #e6e6e6);
  box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
}

.glassmorphism-link {
  position: relative;
  display: inline-block;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.glassmorphism-link:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.glassmorphism-newsletter {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
*/

// tailwind.config.js
/*
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#96CEB4',
        secondary: '#D4A5A5',
      },
      fontFamily: {
        sans: ['var(--font-heebo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
*/