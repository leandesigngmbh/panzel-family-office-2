import SmootherContainer from "@/components/atoms/SmootherContainer";
import Agenda from "@/components/molecules/Agenda";
import BackgroundVideo from "@/components/molecules/BackgroundVideo";
import Contact from "@/components/molecules/Contact";
import Hero from "@/components/molecules/Hero";
import Manifest from "@/components/molecules/Manifest";
import Overview from "@/components/molecules/Overview";
import Purpose from "@/components/molecules/Purpose";
import ShaderBackground from "@/components/molecules/ShaderBackground";
import StatsSection from "@/components/molecules/StatsSection";
import Team from "@/components/molecules/Team";
import Footer from "@/components/organisms/Footer";
import Nav from "@/components/organisms/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <ShaderBackground />

      <SmootherContainer>
        <div className="relative">
          <main className="flex flex-col items-center min-h-screen">
            <Hero />

            <Overview />

            <div className="h-[50vh]"></div>

            <Agenda />

            <Purpose />

            <div data-speed="0.7" className="relative h-[100vh] -z-10 w-full">
              <BackgroundVideo src={"/assets/bg-video.mp4"} />
            </div>

            <Manifest />

            <Team />

            <StatsSection />

            <Contact />
          </main>

          <Footer />
        </div>
      </SmootherContainer>
    </>
  );
}
