import NavColorSwitcher from "@/components/atoms/NavColorSwitcher";
import Contact from "@/components/molecules/Contact";
import CoreCompetencies from "@/components/molecules/CoreCompetencies";
import Hero from "@/components/molecules/Hero";
import Intro from "@/components/molecules/Intro";
import IntroNew from "@/components/molecules/IntroNew";
import Manifest from "@/components/molecules/Manifest";
import MissionVisionValues from "@/components/molecules/MissionVisionValues";
import PinTest from "@/components/molecules/PinTest";
import Priciples from "@/components/molecules/Priciples";
import StatsSection from "@/components/molecules/StatsSection";
import Team from "@/components/molecules/Team";
import Footer from "@/components/organisms/Footer";

const Home = () => {
  return (
    <>
      <NavColorSwitcher id="hero" light={true}>
        <Hero />
      </NavColorSwitcher>

      {/* <PinTest /> */}

      <main className="bg-white relative">
        <IntroNew />

        <NavColorSwitcher id="test" light={true}>
          <CoreCompetencies />

          <MissionVisionValues />
        </NavColorSwitcher>

        <StatsSection />

        <Team />

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;
