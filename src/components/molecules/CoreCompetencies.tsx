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
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Triangle position: top-center, bottom-left, bottom-right
      // Triangle positions closer together
      gsap.set(circlesRef.current[0], {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: "-12vw", // was -20vw → closer to center
        scale: 0,
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
      });

      gsap.set(circlesRef.current[1], {
        xPercent: -50,
        yPercent: -50,
        x: "-12vw", // was -17vw
        y: "8vw", // was 12vw
        scale: 0,
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
      });

      gsap.set(circlesRef.current[2], {
        xPercent: -50,
        yPercent: -50,
        x: "12vw", // was 17vw
        y: "8vw", // was 12vw
        scale: 0,
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
      });

      // Timeline animation: triangle ➝ horizontal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
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
          "<+=0.01"
        )
        .to(
          circlesRef.current[2],
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
          },
          "<+=0.01"
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
          "<+=0.01"
        )
        .to(
          circlesRef.current[2],
          {
            y: "0vw",
            x: "30vw",
            ease: "power2.out",
          },
          "<+=0.01"
        );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-[200vh] bg-black text-white overflow-hidden">
      <div className="text-center text-4xl md:text-6xl py-24 px-4">
        PFO is differentiated by a sharp mix of three core competencies.
      </div>

      <div
        ref={wrapperRef}
        className="relative h-screen w-full flex items-center justify-center"
      >
        {competencies.map(({ label }, i) => (
          <div
            key={i}
            ref={(el) => void (circlesRef.current[i] = el)}
            className="flex items-center justify-center rounded-full h-[25vw] w-[25vw] shadow-lg bg-red text-white text-sm text-center p-4"
          >
            {label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetencies;
