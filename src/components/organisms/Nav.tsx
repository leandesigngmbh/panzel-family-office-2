"use client";

import Logo from "@/components/atoms/Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavColor } from "@/lib/contexts/NavColorContext";

const subNavItems = [
  { title: "About", href: "/#about" },
  { title: "KPI's", href: "/#kpis" },
  { title: "Team", href: "/#team" },
  { title: "Contact", href: "/#contact" },
];

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const subNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useGSAP(
    () => {
      if (!showNav) {
        gsap.fromTo(
          ".subnav-link",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }
    },
    { scope: subNavRef, dependencies: [showNav] }
  );

  const { isLightNav } = useNavColor();

  return (
    <nav
      className={cn(
        "fixed z-50 text-white top-0 inset-x-0 px-2 md:px-4 py-3 grid md:grid-cols-[100px_1fr_100px] w-full uppercase items-center transition",
        isLightNav ? "text-white" : "text-black"
      )}
    >
      {/* Left Part Start */}
      <div
        className={cn(
          "hidden md:flex",
          "justify-start transition-transform",
          scrolled ? "opacity-0" : "opacity-100"
        )}
      >
        <Link href="/">
          <Logo />
        </Link>
      </div>
      {/* Left Part End */}

      {/* Mid Part Start */}
      <div
        className={cn("flex justify-center overflow-y-hidden relative py-1")}
      >
        <Link
          className={cn(
            "flex gap-2",
            showNav ? "translate-y-0" : "-translate-y-8",
            "transition-transform duration-300"
          )}
          href="/"
        >
          <div className="md:hidden">
            <Logo />
          </div>
          Panzel Family Office
        </Link>

        <div
          ref={subNavRef}
          className={cn(
            "absolute transition-transform flex gap-6",
            showNav ? "translate-y-8" : "-translate-y-0"
          )}
        >
          <div className={cn("subnav-link opacity-0", "hidden md:block")}>
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {subNavItems.map(({ title, href }, i) => (
            <Link href={href} key={i} className="subnav-link opacity-0">
              {title}
            </Link>
          ))}
        </div>
      </div>
      {/* Mid Part End */}

      {/* Right Part Start */}
      <div
        className={cn(
          "hidden md:flex",
          "justify-end",
          scrolled ? "opacity-0" : "opacity-100"
        )}
      >
        <Link href="/#contact">Contact</Link>
      </div>
      {/* Right Part End */}
    </nav>
  );
};

export default Nav;
