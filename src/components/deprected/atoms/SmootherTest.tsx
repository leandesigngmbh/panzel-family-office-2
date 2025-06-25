"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const SmootherTest = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: true,
      });
    },
    {
      scope: container,
    }
  );

  return (
    <main className="home" ref={container}>
      <div className="header">
        <h1 className="title">ScrollSmoother NextJS App Folder</h1>
        <p>
          Simple example for setting up GSAP ScrollSmoother in a NextJS App
          using the{" "}
          <strong>
            <i>App</i>
          </strong>{" "}
          Router
        </p>
      </div>
      <div className="box box-a gradient-blue" data-speed="0.5">
        a
      </div>
      <div className="box box-b gradient-orange" data-speed="0.8">
        b
      </div>
      <div className="box box-c gradient-purple" data-speed="1.5">
        c
      </div>
      <div className="line"></div>
    </main>
  );
};

export default SmootherTest;
