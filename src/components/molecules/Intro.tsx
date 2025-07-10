import Image from "next/image";

const Intro = () => {
  return (
    <section className="py-24 md:px-4 px-2 text-2xl md:text-6xl flex flex-col gap-6">
      <p className="max-w-7xl">
        PFO stands at the intersection of smart capital, brand vision, and
        cultural momentum.
      </p>

      <div className="aspect-video w-full bg-gray-200 flex items-center justify-center relative overflow-hidden">
        <Image
          // data-speed="0.75"
          fill
          src="/CZ25W12IX0010_rgb_comp_01.png"
          alt="dasda"
        />
        Video
      </div>
    </section>
  );
};

export default Intro;
