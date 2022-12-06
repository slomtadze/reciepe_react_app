import Logo from "./Logo";
import MainMenu from "./MainMenu";
import Search from "./Search";
import Sign from "./Sign";

const Navbar = () => {
  return (
    <div className="w-screen h-[50px] bg-black/70 text-white flex items-center justify-between px-12 py-8 absolute z-10 top-0 left-0">
      <div>
        <Logo />
      </div>
      <div className="flex h-[50px] justify-end items-center w-3/4">
        <MainMenu />
        <Search />
        <Sign />
      </div>
    </div>
  );
};

export default Navbar;
