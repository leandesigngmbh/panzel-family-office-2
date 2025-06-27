import SmootherContainer from "@/components/atoms/SmootherContainer";
import Hero from "@/components/molecules/Hero";
import Intro from "@/components/molecules/Intro";
import Manifest from "@/components/molecules/Manifest";
import Priciples from "@/components/molecules/Priciples";
import StatsSection from "@/components/molecules/StatsSection";
import Footer from "@/components/organisms/Footer";
import Nav from "@/components/organisms/Nav";

const Home = () => {
  return (
    <>
      <Nav />

      <SmootherContainer>
        <Hero />

        <main className="bg-white relative">
          <Intro />

          <Priciples />

          <Manifest />

          <StatsSection />
        </main>

        <Footer />
      </SmootherContainer>
    </>
  );
};

export default Home;
