const Hero = () => {
  return (
    <div className="flex flex-col gap-32 w-full min-h-screen py-56 px-8 text-white">
      {/* <h3 className="text-4xl text-white">Investing in what's next.</h3> */}

      <h1
        // data-speed={0.8}
        className="text-[14vw] -ml-[0.05em] font-semibold leading-[0.8em] tracking-tighter"
      >
        Growing <br /> together.
      </h1>

      <p data-speed="0.8" className="text-xl max-w-xl">
        Backed by three generations of family investors and over a century of
        real family office experience, Panzel Family Office is your trusted
        partner in asset management. We offer tailored expertise to protect your
        wealth and ensure smooth, future-ready succession across generations.
        {/* About Us Since 1918, Panzel Family Office has redefined what it means to
        serve families. Independent, family-led, and built on over a century of
        trust, we go beyond the expected—delivering bold, tailored strategies
        that make a real impact across generations. */}
      </p>
    </div>
  );
};

export default Hero;
