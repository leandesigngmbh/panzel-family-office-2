"use client";

import Text from "@/components/atoms/Text";
import SmootherContainer from "@/components/deprected/atoms/SmootherContainer";
import Hero from "@/components/molecules/Hero";
import Nav from "@/components/organisms/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <SmootherContainer>
        <Hero />
        <main className="bg-white relative">
          <section className="py-24 px-4">
            <div className="flex justify-end">
              <Text
                text="Backed by three generations of family investors and over a century of
        real family office experience, Panzel Family Office is your trusted
        partner in asset management. We offer tailored expertise to protect your
        wealth and ensure smooth, future-ready succession across generations."
              />
            </div>
          </section>

          <section className="flex font-secondary text-[8vw] flex-col uppercase bg-white text-black w-full py-24 px-4">
            <p>Build on Legacy</p>
            <p>Driven by Innovation</p>
          </section>
        </main>
      </SmootherContainer>
      {/* 
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
      </SmootherContainer> */}
    </>
  );
}
