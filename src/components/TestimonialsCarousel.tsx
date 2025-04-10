'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Testimonial data structure
const testimonials = [
  {
    id: 1,
    name: 'רחל כהן',
    service: 'צילומי חתונה',
    quote: 'הצילומים מהחתונה שלנו יצאו מדהימים! הצלם היה מקצועי, סבלני ותפס את הרגעים הכי מיוחדים.',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'דוד לוי',
    service: 'צילומי משפחה',
    quote: 'הצלחתם לתפוס את האופי המיוחד של המשפחה שלנו בצילומים. התמונות יישארו איתנו לנצח!',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'מיכל ברקוביץ',
    service: 'צילומי הריון',
    quote: 'הצילומים מתקופת ההריון שלי הם אוצר אמיתי. הצלחתם לתפוס את הקסם של התקופה המיוחדת הזו.',
    image: '/images/testimonial-3.jpg',
  },
  {
    id: 4,
    name: 'יוסי אברהם',
    service: 'צילומי מוצר',
    quote: 'הצילומים למוצרים של העסק שלי העלו את המכירות באופן משמעותי. עבודה מקצועית ומדויקת!',
    image: '/images/testimonial-4.jpg',
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  // Handle automatic sliding
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 5000); // Change slide every 5 seconds
  }, [isPaused]);

  useEffect(() => {
    startAutoPlay();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
    startAutoPlay();
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    startAutoPlay();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
    startAutoPlay();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToNext(); // RTL navigation - left arrow goes forward
      if (e.key === 'ArrowRight') goToPrevious(); // RTL navigation - right arrow goes backward
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto px-4 py-12 overflow-hidden rtl"
      dir="rtl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa]/80 to-[#e9ecef]/80 backdrop-blur-md z-0 rounded-2xl"></div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 relative z-10 text-gray-800">
        מה הלקוחות שלנו אומרים
      </h2>
      
      <div 
        className="relative overflow-hidden rounded-xl"
        aria-live="polite"
        aria-roledescription="carousel"
        aria-label="המלצות לקוחות"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-10 bg-white/30 backdrop-blur-lg rounded-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            role="group"
            aria-roledescription="slide"
            aria-label={`המלצה ${currentIndex + 1} מתוך ${testimonials.length}`}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-full bg-[#96CEB4]/30 backdrop-blur-sm shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_2px_2px_5px_rgba(0,0,0,0.1)]"></div>
              <div className="absolute inset-2 overflow-hidden rounded-full shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-right">
              <motion.blockquote 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg md:text-xl font-medium mb-4 text-gray-700 leading-relaxed"
              >
                <span className="text-4xl text-[#D4A5A5] font-serif">"</span>
                {testimonials[currentIndex].quote}
                <span className="text-4xl text-[#D4A5A5] font-serif">"</span>
              </motion.blockquote>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</p>
                <p className="text-[#96CEB4] font-medium">{testimonials[currentIndex].service}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:text-[#96CEB4] transition-colors bg-white/50 backdrop-blur-sm border border-white/20 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"
          aria-label="המלצה קודמת"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#96CEB4] w-8 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]' 
                  : 'bg-gray-300 shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.5)]'
              }`}
              aria-label={`עבור להמלצה ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          className="w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:text-[#96CEB4] transition-colors bg-white/50 backdrop-blur-sm border border-white/20 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"
          aria-label="המלצה הבאה"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      {/* Pause/Play Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-[#D4A5A5] transition-colors bg-white/50 backdrop-blur-sm border border-white/20 shadow-[3px_3px_6px_rgba(0,0,0,0.05),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"
        aria-label={isPaused ? "המשך הצגה אוטומטית" : "השהה הצגה אוטומטית"}
      >
        {isPaused ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default TestimonialsCarousel;