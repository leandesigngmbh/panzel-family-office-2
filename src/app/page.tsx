import Text from "@/components/atoms/Text";
import SmootherContainer from "@/components/atoms/SmootherContainer";
import Hero from "@/components/molecules/Hero";
import Manifest from "@/components/molecules/Manifest";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import StatsSection from "@/components/molecules/StatsSection";
import NavOnPage from "@/components/organisms/NavOnPage";

export default function Home() {
  return (
    <>
      <Nav />

      <NavOnPage />
      <SmootherContainer>
        <Hero />

        <main className="bg-white relative">
          <section className="py-24 px-4">
            <div className="flex flex-col items-end">
              <div>
                <h2 className="whitespace-nowrap uppercase text-base text-red">
                  About
                </h2>

                <Text
                  text="Backed by three generations of family investors and over a century of
        real family office experience, Panzel Family Office is your trusted
        partner in asset management. We offer tailored expertise to protect your
        wealth and ensure smooth, future-ready succession across generations."
                />
              </div>
            </div>
          </section>

          <div className="relative leading-none grid grid-cols-2 text-[8vw] py-12 font-secondary uppercase px-4">
            <h2 className="text-left">
              Build on
              <br />
              Legacy
            </h2>

            <div></div>
            <div></div>

            <h2 className="text-right -mt-[1em]">
              Driven by
              <br /> Innovation
            </h2>
          </div>

          <Manifest />

          <section className="py-24 px-4">
            <div className="flex justify-start flex-col">
              <h2 className="whitespace-nowrap uppercase text-base text-red">
                Services
              </h2>

              <Text
                text="Asset Management,
Wealth Management,
Startup Platform for NextGen,
Hiring and Staffing Services,
Relocation Services,
Family Office Services,
Boarding Services."
              />
            </div>
          </section>

          <StatsSection />
        </main>

        <Footer />
      </SmootherContainer>
    </>
  );
}
