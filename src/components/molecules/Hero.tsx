import Spline from "@splinetool/react-spline/next";

const Hero = () => {
  return (
    <section className="h-screen sm:h-[150vh]">
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
