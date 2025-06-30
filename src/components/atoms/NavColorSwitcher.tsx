"use client";

import { useEffect, ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useNavColor } from "@/lib/contexts/NavColorContext";

gsap.registerPlugin(ScrollTrigger);

type NavColorSwitcherProps = {
  children: ReactNode;
  id?: string;
  light?: boolean;
  className?: string;
};

const NavColorSwitcher = ({
  children,
  id,
  light = false,
  className,
}: NavColorSwitcherProps) => {
  const { setIsLightNav } = useNavColor();

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: `#${id}`,
      start: "top top+=1",
      end: "bottom top+=1",
      onEnter: () => setIsLightNav(light),
      onEnterBack: () => setIsLightNav(light),
      onLeave: () => setIsLightNav(!light),
      onLeaveBack: () => setIsLightNav(!light),
    });

    return () => trigger.kill();
  }, [setIsLightNav, id, light]);

  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default NavColorSwitcher;
