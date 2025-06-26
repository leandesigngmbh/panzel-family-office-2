import Logo from "@/components/atoms/Logo";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed z-50 text-white top-0 inset-x-0 p-4 grid grid-cols-3 w-full uppercase items-center">
      <Link href="/" className="hover:opacity-80">
        <Logo />
      </Link>

      <div className="flex justify-center">
        <Link href="/">Panzel Family Office</Link>
      </div>

      <div className="flex justify-end">
        <Link href="/#contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
