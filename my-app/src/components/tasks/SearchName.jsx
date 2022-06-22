import React from "react";
import { IoSearchOutline} from "react-icons/io5";

const SearchName = () => {
  return (
    <div className="rounded-xl bg-purple-search bg-opacity-50 md:w-[300px] w-2/5 h-[37px] flex justify-between items-center">
      <input
        className="px-5 bg-transparent focus:outline-none md:w-11/12 w-full"
        placeholder="Search name"
      ></input>
      <button className="text-2xl pr-2 flex justify-start items-center">
        <div className="font-thin font-sans text-5xl pr-1 text-white text-opacity-30">
          l
        </div>
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default SearchName;
