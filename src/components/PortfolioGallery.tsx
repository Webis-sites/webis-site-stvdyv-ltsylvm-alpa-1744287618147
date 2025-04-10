'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';

// Define categories with Hebrew labels
const categories = [
  { id: 'all', label: 'הכל' },
  { id: 'portraits', label: 'פורטרטים' },
  { id: 'events', label: 'אירועים' },
  { id: 'commercial', label: 'מסחרי' },
  { id: 'artistic', label: 'אמנותי' },
];

// Sample gallery items
const galleryItems = [
  {
    id: 1,
    src: '/images/portrait1.jpg',
    alt: 'פורטרט אישה',
    category: 'portraits',
    width: 800,
    height: 1200,
  },
  {
    id: 2,
    src: '/images/event1.jpg',
    alt: 'אירוע חתונה',
    category: 'events',
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    src: '/images/commercial1.jpg',
    alt: 'צילום מוצר',
    category: 'commercial',
    width: 800,
    height: 800,
  },
  {
    id: 4,
    src: '/images/artistic1.jpg',
    alt: 'צילום אמנותי',
    category: 'artistic',
    width: 1200,
    height: 900,
  },
  {
    id: 5,
    src: '/images/portrait2.jpg',
    alt: 'פורטרט גבר',
    category: 'portraits',
    width: 800,
    height: 1000,
  },
  {
    id: 6,
    src: '/images/event2.jpg',
    alt: 'אירוע בר מצווה',
    category: 'events',
    width: 1200,
    height: 800,
  },
  {
    id: 7,
    src: '/images/commercial2.jpg',
    alt: 'צילום אופנה',
    category: 'commercial',
    width: 800,
    height: 1200,
  },
  {
    id: 8,
    src: '/images/artistic2.jpg',
    alt: 'צילום טבע',
    category: 'artistic',
    width: 1000,
    height: 800,
  },
  {
    id: 9,
    src: '/images/portrait3.jpg',
    alt: 'פורטרט משפחתי',
    category: 'portraits',
    width: 1200,
    height: 800,
  },
  {
    id: 10,
    src: '/images/event3.jpg',
    alt: 'אירוע חברה',
    category: 'events',
    width: 800,
    height: 600,
  },
  {
    id: 11,
    src: '/images/commercial3.jpg',
    alt: 'צילום נדלן',
    category: 'commercial',
    width: 1200,
    height: 800,
  },
  {
    id: 12,
    src: '/images/artistic3.jpg',
    alt: 'צילום אבסטרקטי',
    category: 'artistic',
    width: 800,
    height: 1000,
  },
];

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter gallery items when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Open modal with selected image
  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200 rtl" dir="rtl">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-heebo">
            הגלריה שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            צפו בעבודות הנבחרות שלנו ותתרשמו מהסגנון והאיכות שאנחנו מציעים
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                ${selectedCategory === category.id 
                  ? 'bg-[#96CEB4] text-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),_inset_-4px_-4px_8px_rgba(255,255,255,0.1)]' 
                  : 'bg-white text-gray-700 shadow-[5px_5px_10px_rgba(0,0,0,0.05),_-5px_-5px_10px_rgba(255,255,255,0.8)]'}
                backdrop-filter backdrop-blur-sm bg-opacity-80
                border border-white border-opacity-20
              `}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-xl"
                style={{ 
                  aspectRatio: `${item.width / item.height}`,
                  backgroundColor: '#f0f0f0',
                  boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
                }}
                onClick={() => openModal(item)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#96CEB4]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">{item.alt}</h3>
                </div>
                
                <div className="h-full w-full overflow-hidden backdrop-filter backdrop-blur-sm bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full relative"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <Dialog
            static
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            open={isModalOpen}
            onClose={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <Dialog.Overlay 
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-2 rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden border border-white border-opacity-20 shadow-2xl"
            >
              <div className="relative" style={{ aspectRatio: `${selectedImage.width / selectedImage.height}` }}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                  className="object-contain rounded-xl"
                  priority
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-medium">{selectedImage.alt}</h3>
              </div>
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md flex items-center justify-center text-white border border-white border-opacity-30 shadow-[3px_3px_6px_rgba(0,0,0,0.1),_-3px_-3px_6px_rgba(255,255,255,0.1)]"
                aria-label="סגור"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}