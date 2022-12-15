import MenuItem from "./MenuItem";

const MainMenu = () => {
  return (
    <ul className="list-none h-full flex justify-end items-center ">
      <MenuItem text="Dinners" type="business_tags" />
      <MenuItem text="In a hurry?" type="difficulty" />
      <MenuItem text="Occasions" type="occasion" />
      <MenuItem text="Cuisines" type="cuisine" />
      <MenuItem text="Healthy" type="healthy" />
    </ul>
  );
};

export default MainMenu;
