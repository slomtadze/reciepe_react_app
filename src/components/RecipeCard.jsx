import React, { useState } from "react";
import img from "../assets/christmas.jpg";

import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

const RecipeCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white min-h-min">
      <div className="relative">
        <img src={img} alt="christmas" />
        <div className="absolute top-1 right-1 text p-[12px] rounded-full bg-orange-400">
          {isFavorite ? (
            <AiFillHeart
              className="text-white text-xl cursor-pointer"
              onClick={() => setIsFavorite(!isFavorite)}
            />
          ) : (
            <AiOutlineHeart
              className="text-white text-xl cursor-pointer"
              onClick={() => setIsFavorite(!isFavorite)}
            />
          )}
        </div>
      </div>
      <div className="px-2 py-4 cursor-pointer">
        <p className="text-gray-500 uppercase text-sm font-medium mb-2">
          appetizers and snacks
        </p>
        <h1 className="text-xl font-bold pb-[1px] border border-transparent hover:border-b-rose-600 duration-150 mb-4">
          Easy Pepperoni Pizza Muffins
        </h1>
        <div className="flex items-center">
          <div className="flex pr-2 border-r border-r-indigo-200">
            <AiFillStar className="text-orange-500" />
            <AiFillStar className="text-orange-500" />
            <AiOutlineStar className="text-gray-500" />
            <AiOutlineStar className="text-gray-500" />
            <AiOutlineStar className="text-gray-500" />
          </div>
          <div className="flex pl-2 items-center text-gray-600 font-mono">
            <span className="mr-2">25</span>
            <p>Ratings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
