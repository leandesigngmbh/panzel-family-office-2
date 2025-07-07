import NavColorSwitcher from "@/components/atoms/NavColorSwitcher";
import Contact from "@/components/molecules/Contact";
import CoreCompetencies from "@/components/molecules/CoreCompetencies";
import Hero from "@/components/molecules/Hero";
import IntroNew from "@/components/molecules/IntroNew";
import MissionVisionValues from "@/components/molecules/MissionVisionValues";
import StatsSection from "@/components/molecules/StatsSection";
import Team from "@/components/molecules/Team";
import Footer from "@/components/organisms/Footer";

const Home = () => {
  return (
    <>
      <NavColorSwitcher id="hero" light={true}>
        <Hero />
      </NavColorSwitcher>

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
