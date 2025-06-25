import Nav from "@/components/organisms/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <iframe
        src="https://my.spline.design/untitled-akpiriQZMtQaAbxZNcdAmrNt/"
        width="100%"
        height="100%"
        className="w-full h-screen"
      ></iframe>

      <div className="flex flex-col min-h-[200vh] bg-orange-600 w-full"></div>
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
