import Link from "next/link";

const navItems = [
  { title: "About" },
  { title: "Manifest" },
  { title: "Services" },
];

const NavOnPage = () => {
  return (
    <div className="fixed bottom-0 z-50 inset-x-0 flex items-center p-4 justify-center">
      <div className="backdrop-blur-xl backdrop-saturate-150 rounded-full p-4 flex gap-2 uppercase border border-red">
        {navItems.map(({ title }, i) => {
          return (
            <Link href="/" key={i}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavOnPage;
