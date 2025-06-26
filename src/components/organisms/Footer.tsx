import Logo from "@/components/atoms/Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 bg-red text-white text-xs p-4 min-h-64 flex flex-col justify-between">
      <div className="flex justify-between">
        <Logo />

        <ul className="flex gap-3 uppercase">
          <li>Terms & Conditions</li>
          <li>Contact</li>
          <li>Legal Notices</li>
        </ul>
      </div>

      <div>
        <p>
          Copyright © 2025 Panzel Family Office is a German-Norwegian-Swedish
          Family Owned Office in Switzerland. All rights reserved.
        </p>

        <p className="opacity-50">
          Panzel Family Office, Rue de Lausanne 43b, 1110 Morges, Switzerland.
          Phone +41798444988. Email hej@panzel.ch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
