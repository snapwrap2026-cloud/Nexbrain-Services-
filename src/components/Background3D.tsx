import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Attempt to hide the watermark logo from the shadow DOM
    const interval = setInterval(() => {
      if (containerRef.current) {
        const viewer = containerRef.current.querySelector('spline-viewer');
        if (viewer && viewer.shadowRoot) {
          const logo = viewer.shadowRoot.querySelector('#logo');
          if (logo) {
            (logo as HTMLElement).style.display = 'none';
            clearInterval(interval);
          }
        }
      }
    }, 500);

    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] bg-brand-black w-full h-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 bottom-[-80px]">
        {/* @ts-ignore */}
        <spline-viewer loading-anim-type="spinner-small-dark" url="https://prod.spline.design/HJ1Aj0sqpI75tgmF/scene.splinecode"></spline-viewer>
      </div>
    </div>
  );
};
