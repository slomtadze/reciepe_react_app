import React from "react";

const SectionListCard = ({ img }) => {
  const backgroundImage = {
    backgroundIMG: img,
  };
  const style = `w-56 bg-cover bg-center mr-8`;
  return (
    <div className="h-[150px] flex">
      <div style={backgroundImage} className="mr-8"></div>
      <div>
        <h1 className="text-xl font-bold">Some header here</h1>
        <p className="italic font-mono">some description</p>
      </div>
    </div>
  );
};

export default SectionListCard;
