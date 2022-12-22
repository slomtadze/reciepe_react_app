import PageWrapper from "../Layout/PageWrapper";
import RecipeCard from "../components/RecipeCard";
import { useParams } from "react-router-dom";

const Recipes = () => {
  const { type } = useParams();
  
  {/* Ak unda gavakeTo API-s gamodzaxeba type-s gamoyenebiT  */}

  return (
    <PageWrapper>
      <div className="py-8 mb-2">
        <div className="h-96 bg-herro-img bg-cover bg-center" />
      </div>
      <div className="w-3/4 mx-auto">
        <h2 className="text-center text-lg mb-8 cursor-pointer text-black/80 hover:text-black duration-150">
          Recipes
        </h2>
        <h2 className="text-center text-5xl font-bold mb-4">{type}</h2>
        <p className="text-center ">
          Celebrate with top-rated holiday cookies, appetizers, and desserts.
          Find the right recipe for any holiday.
        </p>
        <div className="w-3/4 mx-auto flex justify-center flex-wrap text-sm py-4">
          <h3 className="mr-4 mb-4 font-bold border-b-[1px] border-transparent  hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
          <h3 className="mr-4 mb-4 font-bold border-b-[1px] border-transparent hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
          <h3 className="mr-4 mb-4 font-bold border-b-[1px] border-transparent hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
          <h3 className="mr-4 mb-4 font-bold border-b-[1px] border-transparent hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
          <h3 className="mr-4 mb-4 font-bold border-b-[1px] border-transparent hover:border-red-700 duration-150 cursor-pointer">
            BIG GAME RECIPES
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Recipes;
