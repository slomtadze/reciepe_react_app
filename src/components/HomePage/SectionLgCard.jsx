import { useState } from "react";

const SectionLgCard = ({ imgUrl }) => {
  const [descriptionIsShown, setDescriptionIsShown] = useState(false);

  const showDescription = () => {
    setTimeout(() => {
      setDescriptionIsShown(true);
    }, 500);
  };

  const hideDescription = () => {
    setTimeout(() => {
      setDescriptionIsShown(false);
    }, 500);
  };
  const bgImg = imgUrl;

  const backgroundIMG = {
    backgroundImage: `url("${bgImg}")`,
    backgroundSize: "cover",
    backgroundPositioc: "center",
  };

  return (
    <div className="px-4">
      <div style={backgroundIMG} className="h-[150px] mb-2"></div>
      <p
        className="relative text-lg font-bold"
        onMouseEnter={showDescription}
        onMouseLeave={hideDescription}
      >
        Some content Text here
        {descriptionIsShown && (
          <span className="absolute z-10 left-0 w-64 max-w-max top-full  px-4 py-2 rounded-lg border-2 border-gray-500 bg-slate-600 text-white text-[10px] italic ">
            some desctioption here
          </span>
        )}
      </p>
    </div>
  );
};

export default SectionLgCard;
