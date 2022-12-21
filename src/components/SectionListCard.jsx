import React from "react";
import { useNavigate } from "react-router-dom";
import { updateString } from "../helpers/updateString";

const SectionListCard = ({ img, description, title }) => {
  const navigate = useNavigate();
  const backgroundIMG = {
    backgroundImage: `url("${img}")`,
    backgroundSize: "cover",
    backgroundPositioc: "center",
  };
  return (
    <div className="h-[150px] flex grid grid-cols-3 gap-8">
      <div style={backgroundIMG}></div>
      <div className="col-span-2">
        <h1 className="text-xl font-bold" onClick={() => navigate(`/${title}`)}>
          {title}
        </h1>
        <p className="italic font-mono">{updateString(description, 150)}</p>
      </div>
    </div>
  );
};

export default SectionListCard;
