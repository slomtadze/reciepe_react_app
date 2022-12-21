import { useState } from "react";

const SectionLgCard = ({ img, title, description }) => {
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

  const stl = `h-[150px] mb-2 ${img} bg-cover bg-center`;

  return (
    <div className="px-4">
      <div className={stl}></div>
      <p
        className="relative text-gray-500 text-lg italic font-bold hover:text-gray-800 cursor-pointer duration-300"
        onMouseEnter={showDescription}
        onMouseLeave={hideDescription}
      >
        {title}
        {descriptionIsShown && (
          <span className="absolute z-10 left-0 w-96 max-w-max top-full  px-4 py-2 rounded-lg border-2 border-gray-500 bg-slate-600 text-white text-[10px] italic ">
            {description}
          </span>
        )}
      </p>
    </div>
  );
};

export default SectionLgCard;
