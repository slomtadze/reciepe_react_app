import React from "react";
import useHttp from "../../hooks/use-Http";
import SectionWrapper from "../../Layout/SectionWrapper";
import SectionListCard from "./SectionListCard";

const SectionList = () => {
  const { data, error, isLoading } = useHttp("recipes/list", {
    from: "0",
    size: "8",
    tags: "christmas",
  });

  return (
    <SectionWrapper title="Christmas">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-rows-7 gap-4 overflow-y-scroll h-[450px] scrollbar-hide">
          {data &&
            data.results.map((recipe) => (
              <SectionListCard
                key={recipe.id}
                img={recipe.thumbnail_url}
                description={recipe.description}
                title={recipe.name}
              />
            ))}
        </div>
        <div className="relative h-[450px] bg-christmas-img bg-cover bg-center">
          <div className="absolute w-full h-full left-0 top-0 bg-black/30 hover:bg-black/50 duration-300 text-white flex justify-start items-end pb-16 pl-12">
            <div className="w-1/2">
              <h1 className="text-3xl mb-2">Italian Delicious Cuisine</h1>
              <p className="text-sm italic mb-2">
                The Mediterranean diet forms the basis of Italian cuisine, rich
                in pasta, fish, fruits and vegetables. Cheese, cold cuts and
                wine are central to Italian cuisine, and along with pizza and
                coffee (especially espresso) form part of Italian gastronomic
                culture.
              </p>
              <a
                className="italic hover:cursor-pointer hover:text-white/80"
                href=""
              >
                More ...
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionList;
