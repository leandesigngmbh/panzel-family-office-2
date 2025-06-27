"use client";

import Logo from "@/components/atoms/Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const subNavItems = [
  { title: "About", href: "/#about" },
  { title: "Manifest", href: "/#manifest" },
  { title: "Services", href: "/#services" },
];

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const subNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 1000);

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
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      }
    },
    { scope: subNavRef, dependencies: [showNav] }
  );

  return (
    <nav
      className={cn(
        "fixed z-50 text-white top-0 inset-x-0 p-4 grid grid-cols-3 w-full uppercase items-center transition duration-300",
        scrolled ? "bg-white text-red" : "bg-transparent text-white"
      )}
    >
      <div className="flex justify-start">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex justify-center overflow-hidden relative">
        <Link
          className={cn(
            showNav ? "translate-y-0" : "-translate-y-full",
            "transition duration-300"
          )}
          href="/"
        >
          Panzel Family Office
        </Link>

        <div
          ref={subNavRef}
          className={cn(
            "absolute transition duration-300 flex gap-6",
            showNav ? "translate-y-full" : "-translate-y-0"
          )}
        >
          {subNavItems.map(({ title, href }, i) => (
            <Link href={href} key={i} className="subnav-link opacity-0">
              {title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
