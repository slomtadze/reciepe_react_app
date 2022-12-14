import React from "react";

const SectionListCard = () => {
  return (
    <div className="h-[150px] flex">
      <div className="bg-christmas-img w-56 bg-cover bg-center mr-8"></div>
      <div>
        <h1 className="text-xl font-bold">Some header here</h1>
        <p className="italic font-mono">some description</p>
      </div>
    </div>
  );
};

export default SectionListCard;
