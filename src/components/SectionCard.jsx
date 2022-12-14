import { useEffect, useState } from "react";

const SectionCard = ({ adress, title, id, description }) => {
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

  const updateString = (string, limit = 40) => {
    const temp = [];
    if (string.length > limit) {
      string.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          temp.push(cur);
        }
        return acc + cur.length;
      }, 0);
      return `${temp.join(" ")} ...`;
    } else {
      return string;
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 p-2 rounded-xl m-1 ">
      <img src={adress} alt="appetaizers" className="h-48 w-48 rounded-full " />
      <div className="relative flex flex-col items-start h-20 py-2 ">
        <h2
          onMouseEnter={showDescription}
          onMouseLeave={hideDescription}
          className="text-md font-mono font-bold text-black/70 italic mb-1"
        >
          {updateString(title, 41)}
        </h2>

        {descriptionIsShown && (
          <p className="absolute z-10 left-0 w-64 max-w-max top-1/2 px-4 py-2 rounded-lg border-2 border-gray-500 bg-slate-600 text-white text-[10px] italic">
            {description?.length > 0
              ? updateString(description, 150)
              : "No Description avialible"}
          </p>
        )}
      </div>
      <button className="border-[1px] text-sm italic border-yellow-300 px-6 py-1 rounded-full hover:bg-yellow-300 duration-300">
        Details
      </button>
    </div>
  );
};

export default SectionCard;
