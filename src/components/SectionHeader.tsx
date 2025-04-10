'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // Assuming you have a utility function for class merging

// Define the variants for the section header using class-variance-authority
const sectionHeaderVariants = cva(
  'font-serif text-right rtl w-full overflow-hidden', // Base styles
  {
    variants: {
      size: {
        small: 'mb-4',
        medium: 'mb-6',
        large: 'mb-8',
      },
      alignment: {
        right: 'text-right',
        center: 'text-center',
        left: 'text-left',
      },
    },
    defaultVariants: {
      size: 'medium',
      alignment: 'right',
    },
  }
);

// Define the title variants
const titleVariants = cva(
  'font-bold relative z-10 text-gray-800', // Base styles
  {
    variants: {
      size: {
        small: 'text-2xl md:text-3xl',
        medium: 'text-3xl md:text-4xl',
        large: 'text-4xl md:text-5xl',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

// Define the subtitle variants
const subtitleVariants = cva(
  'text-gray-600 mt-2', // Base styles
  {
    variants: {
      size: {
        small: 'text-sm md:text-base',
        medium: 'text-base md:text-lg',
        large: 'text-lg md:text-xl',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

// Define the decorative element variants
const decorativeElementVariants = cva(
  'absolute', // Base styles
  {
    variants: {
      alignment: {
        right: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        left: 'right-0',
      },
    },
    defaultVariants: {
      alignment: 'right',
    },
  }
);

// Define the props interface extending the variants
export interface SectionHeaderProps
  extends VariantProps<typeof sectionHeaderVariants> {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  decorativeElement?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  size,
  alignment,
  className,
  titleClassName,
  subtitleClassName,
  decorativeElement = true,
}) => {
  // Animation variants for Framer Motion
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const decorAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  return (
    <motion.header
      className={cn(
        sectionHeaderVariants({ size, alignment }),
        'relative py-6 px-4',
        'bg-gradient-to-r from-white/80 to-white/60',
        'backdrop-filter backdrop-blur-md',
        'rounded-xl border border-white/20',
        'shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_8px_16px_rgba(0,0,0,0.05)]',
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerAnimation}
    >
      {decorativeElement && (
        <motion.div
          className={cn(
            decorativeElementVariants({ alignment }),
            'h-12 w-12 top-0 -mt-2',
            'rounded-full bg-gradient-to-br from-[#96CEB4]/80 to-[#D4A5A5]/80',
            'backdrop-filter backdrop-blur-sm',
            'border border-white/30',
            'shadow-[0_4px_8px_rgba(0,0,0,0.1)]',
            'z-0'
          )}
          variants={decorAnimation}
        />
      )}

      <div className="relative z-10">
        <motion.h2
          className={cn(
            titleVariants({ size }),
            'mb-2',
            'text-transparent bg-clip-text bg-gradient-to-r from-[#96CEB4] to-[#D4A5A5]',
            'shadow-sm',
            titleClassName
          )}
          variants={itemAnimation}
          dir="rtl"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            className={cn(
              subtitleVariants({ size }),
              'max-w-2xl',
              alignment === 'center' ? 'mx-auto' : '',
              alignment === 'left' ? 'mr-auto' : '',
              alignment === 'right' ? 'ml-auto' : '',
              'text-[#96CEB4]/90',
              subtitleClassName
            )}
            variants={itemAnimation}
            dir="rtl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <motion.div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-1',
          'bg-gradient-to-r from-[#96CEB4]/20 via-[#D4A5A5]/40 to-[#96CEB4]/20',
          'rounded-b-xl'
        )}
        variants={itemAnimation}
      />
    </motion.header>
  );
};

// Usage example:
/*
import { SectionHeader } from '@/components/SectionHeader';

export default function GalleryPage() {
  return (
    <section className="container mx-auto py-12">
      <SectionHeader 
        title="גלריית תמונות" 
        subtitle="צפו בעבודות האחרונות שלנו" 
        size="large"
        alignment="center"
      />
      
      {/* Gallery content *//*}
    </section>
  );
}
*/