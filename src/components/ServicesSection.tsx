"use client";

import { motion } from "framer-motion";
import { FaPortrait, FaUsers, FaBuilding, FaCalendarAlt, FaGraduationCap, FaBaby } from "react-icons/fa";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "צילומי פורטרט",
    description: "צילומי פורטרט מקצועיים המדגישים את האישיות והייחודיות שלך",
    icon: <FaPortrait className="text-4xl text-primary" />,
    image: "/images/portrait.jpg"
  },
  {
    id: 2,
    title: "צילומי אירועים",
    description: "הנצחת רגעים מיוחדים באירועים שלך עם צילומים מרהיבים",
    icon: <FaCalendarAlt className="text-4xl text-primary" />,
    image: "/images/events.jpg"
  },
  {
    id: 3,
    title: "צילומי משפחה",
    description: "צילומי משפחה מלאי חיים שמשקפים את האהבה והקשר המשפחתי",
    icon: <FaUsers className="text-4xl text-primary" />,
    image: "/images/family.jpg"
  },
  {
    id: 4,
    title: "צילומי מסחר",
    description: "צילומי מוצר ותדמית מקצועיים לעסקים ומותגים",
    icon: <FaBuilding className="text-4xl text-primary" />,
    image: "/images/commercial.jpg"
  },
  {
    id: 5,
    title: "צילומי בוגרים",
    description: "צילומי בוגרים מרשימים לציון הישגים ורגעי סיום משמעותיים",
    icon: <FaGraduationCap className="text-4xl text-primary" />,
    image: "/images/graduation.jpg"
  },
  {
    id: 6,
    title: "צילומי ילדים ותינוקות",
    description: "צילומים מתוקים ורכים המנציחים את הרגעים הקסומים של הקטנטנים",
    icon: <FaBaby className="text-4xl text-primary" />,
    image: "/images/babies.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            אנו מציעים מגוון רחב של שירותי צילום מקצועיים המותאמים לצרכים שלך
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 hover:translate-y-[-5px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: service.id * 0.1 }}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              style={{
                boxShadow: "9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)"
              }}
            >
              <div className="absolute inset-0 opacity-10 z-0">
                <div className="w-full h-full relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="service-icon mb-4 bg-secondary/10 inline-block p-4 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                <motion.button
                  className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: "3px 3px 6px rgba(163, 177, 198, 0.4), -3px -3px 6px rgba(255, 255, 255, 0.4)"
                  }}
                >
                  פרטים נוספים
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}