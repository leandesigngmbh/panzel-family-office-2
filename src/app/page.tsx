import NavColorSwitcher from "@/components/atoms/NavColorSwitcher";
import Contact from "@/components/molecules/Contact";
import CoreCompetencies from "@/components/molecules/CoreCompetencies";
import Hero from "@/components/molecules/Hero";
import Intro from "@/components/molecules/Intro";
import Manifest from "@/components/molecules/Manifest";
import PinTest from "@/components/molecules/PinTest";
import Priciples from "@/components/molecules/Priciples";
import StatsSection from "@/components/molecules/StatsSection";
import Team from "@/components/molecules/Team";
import Footer from "@/components/organisms/Footer";

const Home = () => {
  return (
    <>
      {/* <NavColorSwitcher id="hero" light={true}>
        <Hero />
      </NavColorSwitcher> */}

      {/* <PinTest /> */}

      <main className="bg-white relative">
        <section className="py-24 md:px-4 px-2 text-center md:text-8xl text-6xl">
          PFO stands at the intersection of smart capital, brand vision, and
          cultural momentum.
        </section>

        <section className="py-24 md:px-4 px-2">
          <div className="aspect-video w-full bg-red flex items-center justify-center animate-pulse">
            Video
          </div>
        </section>

        <CoreCompetencies />

        {/* <Intro /> */}

        {/* <PinTest /> */}

        {/* <Priciples /> */}

        {/* <NavColorSwitcher id="manifest" light={true}>
          <Manifest />
        </NavColorSwitcher> */}

        <StatsSection />

        <Team />

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;
