"use client";

import { useEffect, useState } from "react";
import Logo from "../atoms/Logo";
import { cleanLink, cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const menuItems = ["About us", "Manifest", "Team", "KPIs"];

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 200);

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
        `fixed flex top-0 z-50 inset-x-0 w-full transition duration-500 text-white justify-between items-center`,
        scrolled ? "bg-black" : "bg-transparent",
        showNav ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <Link
        href="/"
        className={cn(
          "px-8 py-5 transition duration-500",
          scrolled ? "bg-white text-black" : "bg-transparent"
        )}
      >
        <Logo />
      </Link>

      <ul className="flex gap-6 text-xs tracking-wider uppercase py-3 px-8 items-center">
        {menuItems.map((item, i) => {
          const link = cleanLink(item);

          return (
            <li key={i}>
              <Link className="whitespace-nowrap" href={`/#${link}`}>
                {item}
              </Link>
            </li>
          );
        })}

        <li className="ml-3">
          <Button variant={"secondary"}>
            <Link href="/#contact">Contact</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
