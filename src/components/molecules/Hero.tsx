"use client";

import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section data-speed="0.2">
      <Spline
        style={{ height: "100vh" }}
        scene="https://prod.spline.design/vmkVRuLus8-blXQe/scene.splinecode"
      />
    </section>
  );
};

export default Hero;
