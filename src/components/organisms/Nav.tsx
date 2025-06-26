"use client";

import Logo from "@/components/atoms/Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav
      className={cn(
        "fixed z-50 text-white top-0 inset-x-0 p-4 grid grid-cols-3 w-full uppercase items-center transition duration-300",
        scrolled ? "bg-white text-red" : "bg-transparent text-white",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex justify-start">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex justify-center">
        <Link href="/">Panzel Family Office</Link>
      </div>

      <div className="flex justify-end">
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
