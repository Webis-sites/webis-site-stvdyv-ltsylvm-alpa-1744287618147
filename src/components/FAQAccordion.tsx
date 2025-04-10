'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRefs = useRef([]);

  // FAQ data in Hebrew
  const faqItems = [
    {
      question: "איך אני יכול/ה לקבוע פגישה לצילום?",
      answer: "ניתן לקבוע פגישה דרך טופס יצירת הקשר באתר, בהודעה בעמוד האינסטגרם שלנו, או בשיחת טלפון למספר 054-1234567. אנו ממליצים לקבוע פגישה לפחות שבועיים מראש, במיוחד בעונות העמוסות."
    },
    {
      question: "כמה זמן נמשך מפגש צילום?",
      answer: "משך הצילומים תלוי בסוג החבילה שבחרתם. צילומי פורטרט אישיים נמשכים בדרך כלל כשעה, צילומי משפחות כשעה וחצי, וצילומי אירועים מיוחדים בהתאם לאופי האירוע. אנו תמיד מקדישים את הזמן הנדרש כדי להבטיח שנקבל את התוצאות המושלמות."
    },
    {
      question: "מה כדאי ללבוש לצילומים?",
      answer: "מומלץ לבחור בגדים בצבעים תואמים ולהימנע מהדפסים גדולים או לוגואים בולטים. לצילומי משפחה, כדאי לתאם את הצבעים בין כל המשתתפים. שכבות וטקסטורות עובדות נהדר בצילומים. נשמח לייעץ לכם בבחירת הלבוש המתאים ביותר לסגנון הצילום שבחרתם."
    },
    {
      question: "כמה זמן לוקח לקבל את התמונות הסופיות?",
      answer: "זמן העריכה והמסירה תלוי בסוג הצילום ובעומס העבודה הנוכחי. בדרך כלל, תמונות פורטרט ומשפחה מוכנות תוך 7-10 ימי עבודה. לאירועים גדולים יותר כמו חתונות, זמן המסירה הוא 3-4 שבועות. אנו תמיד משתדלים לעמוד בלוחות הזמנים ולעדכן אתכם במקרה של עיכובים."
    },
    {
      question: "האם אתם מספקים שירותי עריכה מיוחדים?",
      answer: "כן, אנו מציעים מגוון שירותי עריכה מתקדמים. כל תמונה עוברת עריכה בסיסית הכוללת תיקוני צבע ואור. בתוספת תשלום, ניתן להזמין עריכה מתקדמת כמו הסרת פגמים בעור, החלפת רקע, או עיבוד אמנותי מיוחד. נשמח לדון באפשרויות העריכה המתאימות לצרכים שלכם."
    },
    {
      question: "האם אתם מצלמים מחוץ לסטודיו?",
      answer: "בהחלט! אנו מציעים צילומי חוץ במגוון לוקיישנים. יש לנו רשימה של מקומות מומלצים באזור, אך נשמח גם להגיע למקום משמעותי עבורכם. צילומי חוץ תלויים במזג האוויר, ולכן תמיד יש לנו תאריך גיבוי במקרה של תנאי מזג אוויר לא מתאימים."
    },
    {
      question: "האם אתם מספקים אלבומי תמונות מודפסים?",
      answer: "כן, אנו מציעים מגוון אלבומי תמונות באיכות גבוהה. האלבומים שלנו מגיעים בגדלים ובסגנונות שונים, עם אפשרויות לכריכות עור, בד או אקריליק. אנו עובדים עם מעבדות הדפסה מהטובות בארץ כדי להבטיח איכות מעולה שתחזיק מעמד לאורך שנים."
    }
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        if (activeIndex === null) {
          setActiveIndex(e.key === 'ArrowDown' ? 0 : faqItems.length - 1);
          return;
        }
        
        const newIndex = e.key === 'ArrowDown' 
          ? (activeIndex + 1) % faqItems.length 
          : (activeIndex - 1 + faqItems.length) % faqItems.length;
        
        setActiveIndex(newIndex);
        accordionRefs.current[newIndex]?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, faqItems.length]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6 md:p-10 font-sans rtl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-right mb-8 text-[#333] relative">
          <span className="relative z-10">שאלות נפוצות</span>
          <span className="absolute bottom-0 right-0 h-3 w-24 bg-[#96CEB4] opacity-40 -z-0"></span>
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden"
            >
              <motion.div
                className={`
                  relative 
                  backdrop-blur-md 
                  bg-white/70
                  border border-white/20
                  shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)]
                  transition-all duration-300
                  ${activeIndex === index ? 'rounded-t-xl' : 'rounded-xl'}
                `}
                whileHover={{ 
                  boxShadow: "8px 8px 20px rgba(0,0,0,0.07), -8px -8px 20px rgba(255,255,255,0.9)",
                  scale: 1.005
                }}
                whileTap={{ 
                  boxShadow: "inset 3px 3px 7px rgba(0,0,0,0.1), inset -3px -3px 7px rgba(255,255,255,0.6)",
                  scale: 0.995
                }}
              >
                <button
                  ref={el => accordionRefs.current[index] = el}
                  className="w-full px-6 py-4 text-right flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <motion.span
                    className={`
                      flex items-center justify-center rounded-full w-8 h-8
                      ${activeIndex === index 
                        ? 'bg-[#D4A5A5] text-white' 
                        : 'bg-white/80 text-[#96CEB4] border border-[#96CEB4]/30'}
                      shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.8)]
                      transition-all duration-300
                    `}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                  <span className="text-lg font-medium text-[#333] mr-4">{item.question}</span>
                </button>
              </motion.div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-white/50 backdrop-blur-sm rounded-b-xl border-x border-b border-white/20 shadow-inner"
                  >
                    <div className="p-6 text-right text-[#555] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;