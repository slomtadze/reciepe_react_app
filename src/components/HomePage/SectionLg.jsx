import useHttp from "../../hooks/use-Http";
import SectionWrapper from "../../Layout/SectionWrapper";
import SectionLgCard from "./SectionLgCard";

const SectionLg = () => {
  return (
    <SectionWrapper title="Explore Cuisine of all around World">
      <div className="grid grid-cols-3 gap-2">
        <div className="relative col-span-2 bg-italian-img bg-cover bg-center">
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
        <div className="w-full grid grid-rows-3 gap-4">
          <SectionLgCard
            img="japanese-img"
            title="Best Rated Japanese Recipes"
          />
          <SectionLgCard img="mexican-img" />
          <SectionLgCard img="hawai-img" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionLg;
/* 
 "hawai-img": "url('/src/assets/hawai-cuisine.jpg')",
        "japanese-img": "url('/src/assets/japanese-cuisine.jpg')",
        "mexican-img": "url('/src/assets/mexican-food.jpg')", */
