import Spline from "@splinetool/react-spline/next";

const Hero = () => {
  return (
    <section className="h-screen">
      {/* Content */}
      <div data-speed={0.2} className="h-full">
        <Spline
          style={{ height: "100%" }}
          // scene="https://prod.spline.design/vmkVRuLus8-blXQe/scene.splinecode"
          // scene="https://prod.spline.design/Z7246DtFSIej6I4W/scene.splinecode"
          scene="https://prod.spline.design/4N3ASol9FwuSRvMF/scene.splinecode"
        />
      </div>
    </section>
  );
};

export default Hero;
