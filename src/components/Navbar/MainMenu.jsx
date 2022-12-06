import MenuItem from "./MenuItem";

const MainMenu = () => {
  return (
    <ul className="list-none h-full flex justify-end items-center ">
      <MenuItem text="Home" />
      <MenuItem text="Reciepes" />
      <MenuItem text="Products" />
      <MenuItem text="About" />
    </ul>
  );
};

export default MainMenu;
