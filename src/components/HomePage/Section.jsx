import React from "react";
import SectionCard from "./SectionCard";
import useHttp from "../../hooks/use-Http";
import { getRndmNumbers } from "../../helpers/getRndmNumbers";

const Section = React.memo(({ urlPath, params, header }) => {
  const { data: recipes, isLoading, error } = useHttp(urlPath, params);
  console.log(recipes);

  return (
    <div className="w-full flex flex-col items-center py-12 rounded bg-gray-100">
      <h1 className="text-4xl mb-12 font-mono font-bold tracking-wider italic ">
        {header}
      </h1>
      <div className="w-full px-8 grid grid-cols-5 lg:grid-cols-3 gap-4">
        {isLoading
          ? console.log(isLoading)
          : recipes.results.map((recipe) => (
              <SectionCard
                key={recipe.id}
                adress={recipe.thumbnail_url}
                title={recipe.name}
                id={recipe.id}
                description={recipe.description}
              />
            ))}
      </div>
    </div>
  );
});

export default Section;
