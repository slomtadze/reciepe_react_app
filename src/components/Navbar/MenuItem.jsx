import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tagsList } from "../../assets/tags_list";

const MenuItem = ({ text, type }) => {
  const [noteIsShown, setNoteIsShown] = useState(false);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const list = tagsList.results.filter((tag) => {
      if (tag.type === type) {
        return tag;
      }
    });

    setTags(list.splice(0, 10));
  }, [type]);

  const showNoteHandler = () => {
    setNoteIsShown(true);
  };
  const hideNoteHandler = () => {
    setNoteIsShown(false);
  };
  return (
    <li
      className="relative text-white hover:text-white/80 duration-300 cursor-pointer mr-4 font-bold"
      onMouseEnter={showNoteHandler}
      onMouseLeave={hideNoteHandler}
      onClick={() => navigate(`/list/${text}`)}
    >
      {text.toUpperCase()}
      {noteIsShown && (
        <div
          className="absolute w-40"
          onMouseEnter={showNoteHandler}
          onMouseLeave={hideNoteHandler}
        >
          <ul className="list-none text-white bg-black/80 pl-2 pr-4 py-4">
            {tags.map((tag) => (
              <li
                className="my-1 italic text-sm hover:text-white/80 cursor-pointer duration-300"
                key={tag.id}
              >
                {tag.display_name}
              </li>
            ))}
            <li className="italic text-sm text-white/60 hover:text-white/80 cursor-pointer">
              More...
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
