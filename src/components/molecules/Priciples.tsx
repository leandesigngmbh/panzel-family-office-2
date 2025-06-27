"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Principles = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".word", {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
      });
    },
    { scope: container }
  );

  const text = `
    Build on Legacy. Our Swiss-based family office draws strength from generations
    of entrepreneurial spirit, ensuring long-term stewardship of wealth with discretion
    and care. Driven by Innovation, we embrace forward-thinking investment strategies,
    combining tradition with progressive insight to shape the future for the next generation.
  `;

  const animatedText = text.split(" ").map((word, i) => {
    const isRed =
      word.toLowerCase().includes("legacy") ||
      word.toLowerCase().includes("innovation");

    return (
      <span
        key={i}
        className={`word inline-block mr-[0.25em] ${isRed ? "text-red" : ""}`}
      >
        {word}
      </span>
    );
  });

  return (
    <section
      id="manifest"
      ref={container}
      className="relative leading-none grid text-[5vw] py-24 font-secondary uppercase px-4 text-pretty"
    >
      <p className="">{animatedText}</p>
    </section>
  );
};

export default Principles;
