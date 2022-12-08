import React from "react";
import SectionCard from "./SectionCard";
import useHttp from "../../hooks/use-Http";

const Section = React.memo(({ urlPath, params }) => {
  const { data: recipes, isLoading, error } = useHttp(urlPath, params);
  console.log(recipes.results, isLoading, error);

  return (
    <div className="w-screen flex flex-col items-center py-12 rounded bg-gray-100 overflow-x-auto">
      <h1 className="text-4xl mb-12 font-mono font-bold">
        Some Header Content Here
      </h1>
      <div className="w-[90%] flex justify-around">
        {isLoading
          ? console.log(isLoading)
          : recipes.results.map((recipe) => (
              <SectionCard title={recipe.name} name="lunch" />
            ))}
      </div>
    </div>
  );
});

export default Section;
