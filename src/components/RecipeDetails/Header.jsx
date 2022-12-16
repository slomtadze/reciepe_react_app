import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
  AiFillPrinter,
} from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Instant Pot Peach Cobbler</h1>
      <div className="py-4 flex font-mono">
        <div className="flex items-center text-xl pr-2 border-r-2 border-gray-300 ">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <h1 className="font-bold uppercase px-2 border-r-2 border-gray-300">
          1 Review
        </h1>
        <h1 className="font-bold uppercase pl-2">2 Photos</h1>
      </div>
      <h3 className="text-lg pb-4">
        Peach cobbler is now a possibility even when fresh peaches are out of
        season.
      </h3>
      <div className="flex items-center text-sm">
        <p className="pr-2">
          Recipe by{" "}
          <span className="font-bold border-b-[1px] border-red-600 cursor-pointer">
            author
          </span>
        </p>
        <p className="border-l-[1px] pl-2">Published on January 19, 2021</p>
      </div>
      <div>
        <div className="flex my-4">
          <div className="bg-[#d54215] w-24 flex items-center justify-center py-2">
            {" "}
            <button className="flex items-center text-white font-bold hover:border-b-[1px] hover:border-white duration-300">
              Save
              <AiOutlineHeart className="ml-2" />
            </button>
          </div>
          <div className="bg-gray-100 w-24 flex items-center justify-center">
            {" "}
            <button className="flex items-center font-bold hover:border-b-[1px] hover:border-[#d54215] duration-300">
              Print
              <AiFillPrinter className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
