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

const Manifest = () => {
  const container = useRef(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndex = useRef(0); // avoid infinite updates

  useEffect(() => {
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

    function animateToIndex(index: number) {
      if (currentIndex.current === index) return;
      currentIndex.current = index;
      setActiveIndex(index);

      const obj = { val: currentIndex.current + 1 };
      gsap.to(obj, {
        val: index + 1,
        duration: 0.5,
        ease: "power2.out",
        roundProps: "val",
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerText = obj.val.toString().padStart(3, "0");
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="manifest"
      ref={container}
      className="text-4xl flex relative w-full"
    >
      {/* LEFT PINNED INDEX */}
      <div className="large-number-container w-1/2 flex justify-start items-start h-screen px-8 py-16">
        <span
          ref={numberRef}
          className="text-[16vw] text-red leading-none font-bold transition duration-300"
        >
          001
        </span>
      </div>

      {/* Invisible triggers for scroll tracking */}
      <div className="w-0">
        {manifestItems.map((_, i) => (
          <div
            key={i}
            className="index-trigger h-[100vh] w-full pointer-events-none"
          />
        ))}
      </div>

      {/* RIGHT PINNED MANIFEST TEXTS */}
      <div className="manifest-right w-1/2 h-screen flex justify-end items-end p-4">
        <div>
          <h2 className="whitespace-nowrap uppercase text-base text-red mb-4">
            Manifest
          </h2>

          <p className="max-w-xl text-pretty indent-24 leading-snug">
            {manifestItems.map((item, i) => (
              <span
                key={i}
                className={cn(
                  "transition-opacity duration-300",
                  i === activeIndex ? "text-black" : "text-black/20"
                )}
              >
                {item + " "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifest;
