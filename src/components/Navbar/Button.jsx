import { useState } from "react";

const Button = ({ icon, note }) => {
  const [noteIsShown, setNoteIsShown] = useState(false);
  const showNoteHandler = () => {
    setNoteIsShown(true);
  };
  const hideNoteHandler = () => {
    setNoteIsShown(false);
  };
  return (
    <button
      className="relative hover:text-white transition duration-300"
      onMouseEnter={showNoteHandler}
      onMouseLeave={hideNoteHandler}
    >
      {icon}{" "}
      {noteIsShown && (
        <div className="absolute z-10 -top-1 right-full text-sm w-max bg-white border-solid text-black p-1 rounded-lg animate-pulse">
          {note}
        </div>
      )}
    </button>
  );
};

export default Button;
