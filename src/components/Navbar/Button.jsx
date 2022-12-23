import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ icon, note, onClick }) => {
  const [noteIsShown, setNoteIsShown] = useState(false);
  const navigate = useNavigate();
  const showNoteHandler = () => {
    setNoteIsShown(true);
  };
  const hideNoteHandler = () => {
    setNoteIsShown(false);
  };

  const clickHandler = () => {
    onClick();
  };
  return (
    <button
      className="relative hover:text-white/80 transition duration-300"
      onMouseEnter={showNoteHandler}
      onMouseLeave={hideNoteHandler}
      onClick={clickHandler}
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
