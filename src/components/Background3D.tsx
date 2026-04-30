import React from 'react';
import Spline from '@splinetool/react-spline';

export const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-brand-black w-full h-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 bottom-[-80px]">
        <Spline scene="https://prod.spline.design/HJ1Aj0sqpI75tgmF/scene.splinecode" />
      </div>
    </div>
  );
};
