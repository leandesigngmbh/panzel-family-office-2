import Logo from "@/components/deprected/atoms/Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-xs p-8 min-h-64 flex flex-col justify-between">
      <div className="flex justify-between">
        <Logo />

        <ul className="flex gap-3">
          <li>Terms & Conditions</li>
          <li>Contact</li>
          <li>Legal Notices</li>
        </ul>
      </div>

      <div>
        <p className="text-gray-400">
          Copyright © 2025 Panzel Family Office is a German-Norwegian-Swedish
          Family Owned Office in Switzerland. All rights reserved.
        </p>

        <p>
          Panzel Family Office, Rue de Lausanne 43b, 1110 Morges, Switzerland.
          Phone +41798444988. Email hej@panzel.ch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
