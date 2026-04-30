import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => {
      setIsVisible(false);
    };

    const mouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseleave', mouseLeave);
    window.addEventListener('mouseenter', mouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseleave', mouseLeave);
      window.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2.5 : isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 25,
          mass: 0.1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : isVisible ? 1 : 0,
          opacity: isHovering ? 0 : isVisible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 20,
          mass: 0.5
        }}
      />
    </>
  );
};
