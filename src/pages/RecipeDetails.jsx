import { useParams } from "react-router-dom";
import PageWrapper from "../Layout/PageWrapper";
import Header from "../components/RecipeDetails/Header";
import Details from "../components/RecipeDetails/Details";
import Ingredients from "../components/RecipeDetails/Ingredients";
import Directions from "../components/RecipeDetails/Directions";
import Reviews from "../components/RecipeDetails/Reviews";

const RecipeDetails = () => {
  const { recipeID } = useParams();

  return (
    <PageWrapper>
      <div className="px-64 bg-white py-8">
        <div className="w-2/3">
          {/*Header */}
          <Header />
          <Details />
          <Ingredients />
          <Directions />
          <Reviews />
        </div>
      </div>
    </PageWrapper>
  );
};

export default RecipeDetails;
