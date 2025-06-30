"use client";

import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="h-screen">
      {/* Content */}
      <div data-speed="0.2">
        <Spline
          style={{ height: "100vh" }}
          scene="https://prod.spline.design/vmkVRuLus8-blXQe/scene.splinecode"
        />
      </div>
    </section>
  );
};

export default Hero;
