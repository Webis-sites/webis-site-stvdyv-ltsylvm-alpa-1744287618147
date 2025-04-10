'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

// Icons for each step
const icons = {
  consultation: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  preparation: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  photoshoot: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M7 2h10" />
      <path d="M7 22h10" />
    </svg>
  ),
  editing: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  delivery: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
};

// Workflow steps data
const workflowSteps = [
  {
    id: 'consultation',
    title: 'פגישת ייעוץ',
    description: 'נפגש לשיחה אישית כדי להבין את החזון שלך ולתכנן את הצילום המושלם.',
    icon: icons.consultation,
  },
  {
    id: 'preparation',
    title: 'הכנה לצילומים',
    description: 'בחירת לוקיישן, תלבושות, ואביזרים שיתאימו לסגנון הצילום המבוקש.',
    icon: icons.preparation,
  },
  {
    id: 'photoshoot',
    title: 'יום הצילום',
    description: 'חוויה מהנה ומקצועית שתנציח רגעים מיוחדים בדיוק כפי שדמיינת.',
    icon: icons.photoshoot,
  },
  {
    id: 'editing',
    title: 'עריכה ועיבוד',
    description: 'עיבוד מקצועי של התמונות הנבחרות עם תשומת לב לכל פרט.',
    icon: icons.editing,
  },
  {
    id: 'delivery',
    title: 'מסירת התוצרים',
    description: 'קבלת אלבום דיגיטלי ומודפס עם התמונות המעוצבות בצורה מושלמת.',
    icon: icons.delivery,
  },
];

const WorkflowStep = ({ step, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
      }}
      className="relative flex flex-col items-center mb-12 md:mb-0 md:even:flex-row-reverse md:odd:flex-row"
    >
      {/* Step number with neumorphic design */}
      <div className="absolute top-0 right-1/2 md:static md:mx-6 transform translate-x-1/2 md:translate-x-0 z-10">
        <div className="flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-xl bg-gradient-to-br from-[#96CEB4] to-[#88BEA6] shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]">
          {index + 1}
        </div>
      </div>

      {/* Card with glassmorphism effect */}
      <div className="w-full md:w-5/12 mt-8 md:mt-0 rtl">
        <div className="relative backdrop-blur-md bg-white/30 p-6 rounded-xl border border-white/20 shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 z-0"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="mr-4 text-[#96CEB4]">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-700">{step.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PhotographyWorkflow = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">תהליך העבודה שלנו</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אנו מלווים אתכם בכל שלב בדרך ליצירת תמונות מרהיבות שישארו איתכם לנצח
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line - visible on medium screens and up */}
          <div className="hidden md:block absolute top-0 bottom-0 right-1/2 w-0.5 bg-gradient-to-b from-[#96CEB4] to-[#D4A5A5] transform translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {workflowSteps.map((step, index) => (
              <WorkflowStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Call to action - neumorphic button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-[#f0f0f3] rounded-xl font-bold text-[#96CEB4] transition-all duration-300
            shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]
            hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.8)]
            active:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.8)]
            focus:outline-none">
            קבעו פגישת ייעוץ
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotographyWorkflow;