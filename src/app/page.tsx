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
      <Hero />

      <main className="bg-white relative">
        <Intro />

        <Priciples />

        <Manifest />

        <StatsSection />

        <Team />
      </main>

      <Footer />
    </>
  );
};

export default Home;
