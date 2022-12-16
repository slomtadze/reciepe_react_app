import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeID } = useParams();

  return (
    <div>
      <h1 className="mt-24">This is RecipeDetails {recipeID}</h1>
    </div>
  );
};

export default RecipeDetails;
