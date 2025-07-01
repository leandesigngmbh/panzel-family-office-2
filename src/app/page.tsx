import NavColorSwitcher from "@/components/atoms/NavColorSwitcher";
import Contact from "@/components/molecules/Contact";
import Hero from "@/components/molecules/Hero";
import Intro from "@/components/molecules/Intro";
import Manifest from "@/components/molecules/Manifest";
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

      <main className="bg-white relative">
        <Intro />

        {/* <Priciples /> */}

        <NavColorSwitcher id="manifest" light={true}>
          <Manifest />
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
