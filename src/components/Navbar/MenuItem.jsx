import { useState } from "react";

const MenuItem = ({ text }) => {
  const [noteIsShown, setNoteIsShown] = useState(false);

  const showNoteHandler = () => {
    setNoteIsShown(true);
  };
  const hideNoteHandler = () => {
    setNoteIsShown(false);
  };
  return (
    <li
      className="relative text-white/80 hover:text-white duration-300 cursor-pointer mr-4"
      onMouseEnter={showNoteHandler}
      onMouseLeave={hideNoteHandler}
    >
      {text}
      {noteIsShown && (
        <div
          className="absolute py-4 pl-1 pr-4"
          onMouseEnter={showNoteHandler}
          onMouseLeave={hideNoteHandler}
        >
          <ul className="list-none text-black bg-gray-400 rounded border-2 pl-1 pr-4">
            <li className="my-1">test</li>
            <li className="my-1">test</li>
            <li className="my-1">test</li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
