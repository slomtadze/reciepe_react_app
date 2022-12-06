import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  return (
    <form className="relative mr-4 h-full flex items-center">
      <input
        className="px-4 py-2 rounded-xl bg-gray-500 text-white/80 outline-none italic"
        id="search"
        name="search"
        placeholder="Search"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 text-lg text-white/80 hover:text-white duration-300">
        <RiSearch2Line />
      </button>
    </form>
  );
};

export default Search;
