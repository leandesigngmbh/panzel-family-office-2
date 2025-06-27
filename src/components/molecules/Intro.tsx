import Text from "@/components/atoms/Text";

const Intro = () => {
  return (
    <section className="py-24 px-4">
      <div className="flex flex-col items-end">
        <div>
          <h2 className="whitespace-nowrap uppercase text-base text-red">
            About
          </h2>

          <Text
            text="Backed by three generations of family investors and over a century of
        real family office experience, Panzel Family Office is your trusted
        partner in asset management. We offer tailored expertise to protect your
        wealth and ensure smooth, future-ready succession across generations."
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
