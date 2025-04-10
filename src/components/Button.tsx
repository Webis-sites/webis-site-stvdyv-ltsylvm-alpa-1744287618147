'use client';

// Button.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

// Define button variants using class-variance-authority
const buttonVariants = cva(
  // Base styles for all buttons
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-xl',
    'transition-all duration-300 ease-in-out',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'rtl:flex-row-reverse', // RTL support
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary text-white',
          'hover:bg-primary-dark',
          'active:scale-95',
          'shadow-neumorphic-primary',
          'hover:shadow-neumorphic-primary-hover',
          'focus-visible:ring-primary/50',
        ],
        secondary: [
          'bg-secondary text-white',
          'hover:bg-secondary-dark',
          'active:scale-95',
          'shadow-neumorphic-secondary',
          'hover:shadow-neumorphic-secondary-hover',
          'focus-visible:ring-secondary/50',
        ],
        outline: [
          'bg-transparent',
          'border-2 border-primary text-primary',
          'hover:bg-primary/10',
          'active:scale-95',
          'shadow-neumorphic-outline',
          'hover:shadow-neumorphic-outline-hover',
          'focus-visible:ring-primary/50',
        ],
        text: [
          'bg-transparent text-primary',
          'hover:bg-primary/10',
          'active:scale-95',
          'focus-visible:ring-primary/50',
        ],
        glass: [
          'bg-white/20 backdrop-blur-md',
          'border border-white/30',
          'text-white',
          'shadow-glass',
          'hover:bg-white/30',
          'active:scale-95',
          'focus-visible:ring-white/50',
        ],
      },
      size: {
        small: ['text-sm', 'py-1.5', 'px-3'],
        medium: ['text-base', 'py-2', 'px-4'],
        large: ['text-lg', 'py-2.5', 'px-5'],
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      fullWidth: false,
    },
  }
);

// Define button props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      fullWidth,
      className,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    // Animation variants for Framer Motion
    const buttonAnimations = {
      hover: { scale: 1.02 },
      tap: { scale: 0.98 },
    };

    return (
      <motion.button
        ref={ref}
        className={buttonVariants({ variant, size, fullWidth, className })}
        disabled={disabled || isLoading}
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimations}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <span className="animate-spin mr-2 rtl:ml-2 rtl:mr-0">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        {!isLoading && leftIcon && <span className="button-icon">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="button-icon">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };