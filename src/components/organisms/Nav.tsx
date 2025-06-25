import Logo from "@/components/atoms/Logo";

const Nav = () => {
  return (
    <div className="fixed text-white top-0 inset-x-0 p-4 grid grid-cols-3 w-full uppercase items-center">
      <Logo />
      <div className="flex justify-center">Panzel Family Office</div>
      <div className="flex justify-end">Contact</div>
    </div>
  );
};

export default Nav;
