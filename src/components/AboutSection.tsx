// app/about/page.js
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

// Team members data
const teamMembers = [
  {
    name: 'דניאל כהן',
    role: 'צלם ראשי ומייסד',
    bio: 'עם ניסיון של מעל 15 שנה בתעשיית הבידור, דניאל מביא את הראייה האמנותית והמקצועית שלו לכל פרויקט.',
    image: '/images/daniel.jpg',
  },
  {
    name: 'מיכל לוי',
    role: 'צלמת פורטרטים',
    bio: 'מיכל מתמחה בצילומי פורטרטים אינטימיים שמספרים סיפור ומבליטים את האישיות הייחודית של כל אדם.',
    image: '/images/michal.jpg',
  },
  {
    name: 'יוסי אברהם',
    role: 'עורך תמונה',
    bio: 'יוסי הוא אשף העריכה שלנו, עם עין חדה לפרטים ויכולת להפוך כל תמונה ליצירת אמנות.',
    image: '/images/yossi.jpg',
  },
];

// Scroll animation component
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8, 
            ease: "easeOut",
            delay 
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Glassmorphism Card component
const GlassmorphicCard = ({ children, className = '' }) => {
  return (
    <div className={`
      backdrop-filter backdrop-blur-md 
      bg-white/30 dark:bg-black/20
      border border-white/20 
      rounded-2xl 
      shadow-lg
      ${className}
    `}>
      {children}
    </div>
  );
};

// Neumorphic Button component
const NeumorphicButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        py-3 px-6
        bg-[#f0f0f3]
        rounded-xl
        shadow-[5px_5px_10px_#d1d1d4,-5px_-5px_10px_#ffffff]
        hover:shadow-[inset_5px_5px_10px_#d1d1d4,inset_-5px_-5px_10px_#ffffff]
        active:shadow-[inset_5px_5px_10px_#d1d1d4,inset_-5px_-5px_10px_#ffffff]
        transition-all duration-300
        text-gray-700
        font-medium
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f0f3] to-[#e6e6e9] text-right" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/studio-hero.jpg" 
            alt="סטודיו לצילום אלפא" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#96CEB4]/80 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 right-0 p-8 md:p-16 max-w-2xl">
          <GlassmorphicCard className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#333] font-serif">
              סטודיו לצילום אלפא
            </h1>
            <p className="text-lg md:text-xl text-[#555]">
              מספרים את הסיפור שלכם דרך עדשת המצלמה
            </p>
          </GlassmorphicCard>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Side */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <AnimatedSection>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
                <Image 
                  src="/images/studio-interior.jpg" 
                  alt="פנים הסטודיו" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl -mt-32 mr-16 transform -rotate-3">
                <Image 
                  src="/images/camera-equipment.jpg" 
                  alt="ציוד צילום מקצועי" 
                  fill 
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
          
          {/* Content Side */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <AnimatedSection>
              <div className="p-8 rounded-3xl bg-[#f0f0f3] shadow-[10px_10px_20px_#d1d1d4,-10px_-10px_20px_#ffffff]">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#96CEB4]">
                  הסיפור שלנו
                </h2>
                <p className="text-lg mb-6 leading-relaxed text-gray-700">
                  סטודיו לצילום אלפא נוסד בשנת 2008 מתוך אהבה עמוקה לאמנות הצילום ותשוקה לתפוס רגעים בלתי נשכחים. עם ניסיון של מעל 15 שנה בתעשיית הבידור והצילום, הפכנו למובילים בתחום הצילום המקצועי בישראל.
                </p>
                <p className="text-lg mb-8 leading-relaxed text-gray-700">
                  המשימה שלנו היא להעניק שירות מקצועי ואיכותי, תוך יצירת חוויה אישית ונעימה לכל לקוח. אנו מאמינים שכל רגע ראוי להיות מונצח באיכות הגבוהה ביותר, ולכן אנו משקיעים בציוד המתקדם ביותר ובצוות המקצועי והמיומן ביותר.
                </p>
                
                <NeumorphicButton className="mt-4">
                  קבע פגישת היכרות
                </NeumorphicButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#D4A5A5]/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#D4A5A5]">
              הכירו את הצוות שלנו
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.2}>
                <GlassmorphicCard className="p-6 h-full flex flex-col">
                  <div className="relative h-80 mb-4 rounded-xl overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#96CEB4]">{member.name}</h3>
                  <p className="text-lg font-medium mb-3 text-[#D4A5A5]">{member.role}</p>
                  <p className="text-gray-700 flex-grow">{member.bio}</p>
                </GlassmorphicCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Statement */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#96CEB4]">
                החזון שלנו
              </h2>
              
              <div className="p-8 rounded-3xl bg-[#f0f0f3] shadow-[10px_10px_20px_#d1d1d4,-10px_-10px_20px_#ffffff]">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  אנו מאמינים שצילום הוא יותר מאשר תפיסת תמונה - זוהי אמנות של תפיסת רגשות, סיפורים וזכרונות.
                </p>
                <p className="text-xl leading-relaxed text-gray-700">
                  בסטודיו לצילום אלפא, אנו שואפים להיות יותר מסתם צלמים. אנחנו מספרי סיפורים חזותיים, יוצרים של זכרונות, ושותפים ברגעים המשמעותיים ביותר בחייכם.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#96CEB4]/30 to-[#D4A5A5]/30">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <GlassmorphicCard className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333]">
                בואו ניצור יחד
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
                מוכנים להנציח את הרגעים המיוחדים שלכם? צרו איתנו קשר היום ונתחיל לתכנן את הצילומים המושלמים עבורכם.
              </p>
              <NeumorphicButton>
                צרו קשר עכשיו
              </NeumorphicButton>
            </GlassmorphicCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}