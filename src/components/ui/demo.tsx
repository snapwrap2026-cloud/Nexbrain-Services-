'use client'

import { SplineScene } from "./splite";
import { Card } from "./card"
import { Spotlight } from "./spotlight"
 
export function SplineSceneBasic() {
  return (
    <section className="section-spacing container-custom">
      <Card className="w-full min-h-[500px] h-auto md:h-[500px] bg-black border border-white/10 relative overflow-hidden rounded-3xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Interactive 3D
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
              that capture attention and enhance your design.
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative min-h-[300px] md:min-h-0">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}
