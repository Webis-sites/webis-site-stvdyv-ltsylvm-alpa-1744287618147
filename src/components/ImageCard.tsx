'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define TypeScript interface for component props
interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  category?: string;
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:2';
  overlay?: {
    text?: string;
    position?: 'top' | 'center' | 'bottom';
    textColor?: string;
  };
  onClick?: () => void;
  priority?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  caption,
  category,
  aspectRatio = '3:2',
  overlay,
  onClick,
  priority = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate aspect ratio for the container
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case '1:1': return 'aspect-square';
      case '4:3': return 'aspect-[4/3]';
      case '16:9': return 'aspect-[16/9]';
      case '3:2': 
      default: return 'aspect-[3/2]';
    }
  };

  // Get overlay position class
  const getOverlayPositionClass = () => {
    switch (overlay?.position) {
      case 'top': return 'items-start pt-6';
      case 'bottom': return 'items-end pb-6';
      case 'center':
      default: return 'items-center';
    }
  };

  return (
    <motion.div
      className={`relative ${getAspectRatioClass()} w-full overflow-hidden rounded-xl rtl:text-right ltr:text-left`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7)',
        backgroundColor: '#f0f0f3',
        borderRadius: '16px',
      }}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
      aria-label={title || alt}
    >
      {/* Image container with glass effect on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      </div>

      {/* Category tag */}
      {category && (
        <motion.div
          className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-10 px-3 py-1 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: 'rgba(150, 206, 180, 0.85)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span className="text-sm font-medium text-white">{category}</span>
        </motion.div>
      )}

      {/* Overlay text */}
      {overlay?.text && (
        <motion.div
          className={`absolute inset-0 flex justify-center ${getOverlayPositionClass()} px-6 z-10`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="text-xl md:text-2xl font-bold px-4 py-2 rounded"
            style={{
              color: overlay.textColor || 'white',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {overlay.text}
          </span>
        </motion.div>
      )}

      {/* Hover overlay with glass effect */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)',
          backdropFilter: 'blur(4px)',
        }}
      >
        {/* Glass card for title and caption */}
        <motion.div
          className="p-4 rounded-lg"
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          {title && (
            <h3 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h3>
          )}
          {caption && (
            <p 
              className="text-sm md:text-base font-medium"
              style={{ color: '#D4A5A5' }}
            >
              {caption}
            </p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ImageCard;