import MenuItem from "./MenuItem";

const MainMenu = () => {
  return (
    <ul className="list-none h-full flex justify-end items-center ">
      {/* <MenuItem text="Dinners" />
      <MenuItem text="Ingredients" />
      <MenuItem text="Occasions" /> */}
      <MenuItem text="Cuisines" type="cuisine" />
      {/* <MenuItem text="Healthy" /> */}
    </ul>
  );
};

export default MainMenu;
