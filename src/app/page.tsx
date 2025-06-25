import Nav from "@/components/organisms/Nav";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <>
      <Nav />

      <Spline scene="https://prod.spline.design/vmkVRuLus8-blXQe/scene.splinecode" />

      <section className="flex flex-col min-h-[200vh] bg-white text-black w-full py-24 px-4">
        <p>Width the help of</p>
        <p>Width the help of</p>
        <p>Width the help of</p>
        <p>Width the help of</p>
        <p>Width the help of</p>
      </section>
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
