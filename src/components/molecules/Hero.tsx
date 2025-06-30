"use client";

import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="h-[150vh]">
      {/* Content */}
      <div data-speed="0.2" className="h-full">
        <Spline
          style={{ height: "100%" }}
          scene="https://prod.spline.design/vmkVRuLus8-blXQe/scene.splinecode"
        />
      </div>
    </section>
  );
};

export default Hero;
