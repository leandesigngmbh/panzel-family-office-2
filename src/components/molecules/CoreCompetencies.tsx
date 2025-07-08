"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const competencies = [
  { label: "Investing Expertise" },
  { label: "Building Modern Platforms for Next Generation Investors" },
  { label: "Position at the Frontier of Cultural Relevance" },
];

const CoreCompetencies = () => {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(circlesRef.current[0], {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: "-10vw",
        scale: 0.5,
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
      });

      gsap.set(circlesRef.current[1], {
        xPercent: -50,
        yPercent: -50,
        x: "-12vw",
        y: "10vw",
        scale: 0.5,
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
      });

      gsap.set(circlesRef.current[2], {
        xPercent: -50,
        yPercent: -50,
        x: "12vw",
        y: "10vw",
        scale: 0.5,
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      tl.to(circlesRef.current[0], {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      })
        .to(
          circlesRef.current[1],
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          circlesRef.current[2],
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          },
          "<"
        )
        .to(circlesRef.current[0], {
          y: "0vw",
          x: "0vw",
          ease: "power2.out",
        })
        .to(
          circlesRef.current[1],
          {
            y: "0vw",
            x: "-30vw",
            ease: "power2.out",
          },
          "<"
        )
        .to(
          circlesRef.current[2],
          {
            y: "0vw",
            x: "30vw",
            ease: "power2.out",
          },
          "<"
        );

      // Background color animation
      gsap.fromTo(
        sectionRef.current,
        { backgroundColor: "#525252" },
        {
          backgroundColor: "#000000",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none none",
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    // let this section turn into black from gray while scrolling
    <section ref={sectionRef} className="text-white overflow-hidden pt-24">
      <div className="flex gap-8 flex-col px-4">
        <h2 className="whitespace-nowrap uppercase text-base text-red">
          About us
        </h2>

        <div className="text-2xl sm:text-4xl md:text-6xl w-full">
          <h3>
            PFO is differentiated by a sharp mix of three core competencies.
          </h3>
        </div>
      </div>

      <div className="min-h-[200vh] overflow-hidden">
        <div
          ref={wrapperRef}
          className="relative w-full h-screen flex items-center justify-center"
        >
          {competencies.map(({ label }, i) => (
            <div
              key={i}
              ref={(el) => void (circlesRef.current[i] = el)}
              className="flex items-center justify-center rounded-full h-[33vw] w-[33vw] md:h-[25vw] md:w-[25vw] shadow-lg bg-white/50 text-white text-lg leading-tight md:text-2xl text-center p-4 overflow-hidden"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
