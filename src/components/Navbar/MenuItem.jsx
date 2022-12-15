import { useEffect, useState } from "react";
import { tagsList } from "../../assets/tags_list";

const MenuItem = ({ text, type }) => {
  const [noteIsShown, setNoteIsShown] = useState(false);
  const [tags, setTags] = useState([]);

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
    >
      {text}
      {noteIsShown && (
        <div
          className="absolute py-4 pl-1 pr-4"
          onMouseEnter={showNoteHandler}
          onMouseLeave={hideNoteHandler}
        >
          <ul className="list-none text-black bg-gray-400 rounded border-2 pl-1 pr-4">
            {tags.map((tag) => (
              <li className="my-1" key={tag.id}>
                {tag.display_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
