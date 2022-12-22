import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ icon, note, path }) => {
  const [noteIsShown, setNoteIsShown] = useState(false);
  const navigate = useNavigate()
  const showNoteHandler = () => {
    setNoteIsShown(true);
  };
  const hideNoteHandler = () => {
    setNoteIsShown(false);
  };
  return (
    <button
      className="relative hover:text-white/80 transition duration-300"
      onMouseEnter={showNoteHandler}
      onMouseLeave={hideNoteHandler}
      onClick={() => navigate(`/${path}`)}
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
