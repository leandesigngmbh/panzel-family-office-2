import NavColorSwitcher from "@/components/atoms/NavColorSwitcher";
import Contact from "@/components/molecules/Contact";
import CoreCompetencies from "@/components/molecules/CoreCompetencies";
import Hero from "@/components/molecules/Hero";
import Footer from "@/components/organisms/Footer";

const Home = () => {
  return (
    <>
      <NavColorSwitcher id="hero" light={true}>
        <Hero />
      </NavColorSwitcher>

      <main className="bg-white relative">
        <NavColorSwitcher id="test" light={true}>
          <CoreCompetencies />
        </NavColorSwitcher>

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;
