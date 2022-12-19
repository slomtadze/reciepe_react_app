import PageWrapper from "../Layout/PageWrapper";

const List = () => {
  return (
    <PageWrapper>
      <div className="py-8 mb-2">
        <div className="h-96 bg-herro-img bg-cover bg-center" />
      </div>
      <div className="w-3/4 mx-auto">
        <h2 className="text-center mb-8">Recipes</h2>
        <h2 className="text-center text-5xl font-bold mb-2">
          Holidays and Events
        </h2>
        <p className="text-center ">
          Celebrate with top-rated holiday cookies, appetizers, and desserts.
          Find the right recipe for any holiday.
        </p>
        <div className="w-3/4 mx-auto flex justify-center text-sm">
          <h3 className="mr-4 font-bold border-b-[1px] border-transparent  hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
          <h3 className="mr-4 font-bold border-b-[1px] border-transparent hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
          <h3 className="mr-4 font-bold border-b-[1px] border-transparent hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
          <h3 className="mr-4 font-bold border-b-[1px] border-transparent hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
          <h3 className="mr-4 font-bold border-b-[1px] border-transparent hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
        </div>
      </div>
    </PageWrapper>
  );
};

export default List;
