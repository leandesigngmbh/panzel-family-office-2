import Logo from "@/components/atoms/Logo";
import Link from "next/link";

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Contact", href: "/#contact" },
  { label: "Legal Notices", href: "legal-notices" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-700 text-white text-xs md:p-4 p-2 min-h-64 flex flex-col justify-between">
      <div className="flex justify-between">
        <Logo />

        <ul className="flex gap-3 uppercase">
          {footerLinks.map(({ label, href }, i) => {
            return (
              <li key={i}>
                <Link href={href}>{label} </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p>
          Copyright © 2025 Panzel Family Office is a German-Norwegian-Swedish
          Family Owned Office in Switzerland. All rights reserved.
        </p>

        <p className="text-gray-400">
          Panzel Family Office, Rue de Lausanne 43b, 1110 Morges, Switzerland.
          Phone +41798444988. Email hej@panzel.ch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
