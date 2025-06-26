"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CountUpProps = {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  className?: string;
};

gsap.registerPlugin(ScrollTrigger);

const CountUp = ({
  from = 0,
  to,
  duration = 2,
  decimals = 0,
  className = "",
}: CountUpProps) => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const target = el.current;
    if (!target) return;

    const ctx = gsap.context(() => {
      let obj = { val: from };

      gsap.to(obj, {
        val: to,
        duration,
        ease: "power1.out",
        scrollTrigger: {
          trigger: target,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
        onUpdate: () => {
          target.textContent = obj.val.toFixed(decimals);
        },
      });
    });

    return () => ctx.revert();
  }, [from, to, duration, decimals]);

  return <span ref={el} className={className}></span>;
};

export default CountUp;
