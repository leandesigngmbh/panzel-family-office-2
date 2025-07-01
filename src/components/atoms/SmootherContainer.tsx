"use client";

import { ReactNode, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

type SmootherContainerProps = {
  children: ReactNode;
};

const SmootherContainer = ({ children }: SmootherContainerProps) => {
  const smoother = useRef<ScrollSmoother | null>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.01,
      });
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmootherContainer;
