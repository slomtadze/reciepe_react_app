import { useParams } from "react-router-dom";
import PageWrapper from "../Layout/PageWrapper";

const RecipeDetails = () => {
  const { recipeID } = useParams();

  return (
    <PageWrapper>
      <div className="px-48 bg-white py-8">
        {/*Header */}
        <div>
          <h1>Title</h1>
          <div>
            <div>Rate</div>
            <div>Review</div>
            <div>Photos</div>
          </div>
          <h3>
            Peach cobbler is now a possibility even when fresh peaches are out
            of season.
          </h3>
          <p>
            Recipe by <span>author</span> Published on January 19, 2021
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RecipeDetails;
