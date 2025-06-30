"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const manifestItems = [
  "Make your vision explode.",
  "Flip the game, and never settle.",
  "The future’s your playground—take it by force.",
  "Real change? It starts inside.",
  "Think savage. Move fearless.",
  "Stay hungry. Stay raw.",
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const digits = Array.from({ length: 10 }, (_, i) => i);

const Manifest = () => {
  const container = useRef(null);
  const digitRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndex = useRef(0);

  const setDigitRef = (index: number) => (el: HTMLDivElement | null) => {
    digitRefs.current[index] = el;
  };

  useEffect(() => {
    function animateToIndex(index: number) {
      if (currentIndex.current === index) return;
      currentIndex.current = index;
      setActiveIndex(index);

      const padded = (index + 1).toString().padStart(3, "0").split("");

      padded.forEach((digit, i) => {
        const container = digitRefs.current[i];
        if (!container) return;

        const digitHeight = container.clientHeight / 10;

        gsap.to(container, {
          y: -parseInt(digit) * digitHeight,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    }

    const triggers = gsap.utils.toArray<HTMLElement>(".index-trigger");

    triggers.forEach((trigger, index) => {
      ScrollTrigger.create({
        trigger,
        start: "top center",
        end: "bottom center",
        onEnter: () => animateToIndex(index),
        onEnterBack: () => animateToIndex(index),
      });
    });

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".manifest-right",
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".large-number-container",
      scrub: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="py-24 bg-red">
      <div ref={container} className="text-4xl flex relative w-full">
        {/* LEFT PINNED INDEX */}
        <div className="large-number-container w-1/2 flex justify-start items-start h-screen px-8 py-16">
          <div className="flex text-[16vw] font-bold text-black leading-none">
            {[0, 1, 2].map((i) => (
              <div key={i} className="overflow-y-hidden h-[1em]">
                <div ref={setDigitRef(i)} className="flex flex-col">
                  {digits.map((d) => (
                    <div className="inline" key={d}>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invisible triggers for scroll tracking */}
        <div className="w-0">
          <div className="h-[50vh]"></div>
          {manifestItems.map((_, i) => (
            <div
              key={i}
              className="index-trigger h-[50vh] w-full pointer-events-none"
            />
          ))}
          <div className="h-[50vh]"></div>
        </div>

        {/* RIGHT PINNED MANIFEST TEXTS */}
        <div className="manifest-right w-1/2 h-screen flex justify-end items-end p-4">
          <div>
            <h2 className="whitespace-nowrap uppercase text-base text-black">
              Manifest
            </h2>

            <p className="max-w-xl text-pretty indent-24">
              {manifestItems.map((item, i) => (
                <span
                  key={i}
                  className={cn(
                    "transition-opacity duration-300",
                    i === activeIndex ? "text-white" : "text-white/20"
                  )}
                >
                  {item + " "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifest;
