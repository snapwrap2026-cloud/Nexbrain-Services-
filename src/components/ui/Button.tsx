import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { forwardRef } from 'react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-white text-black font-medium hover:opacity-85',
      secondary: 'bg-brand-secondary text-white border border-white/10 hover:border-white/20',
      outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5',
      ghost: 'bg-transparent text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'relative inline-flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10">{props.children as React.ReactNode}</span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };


