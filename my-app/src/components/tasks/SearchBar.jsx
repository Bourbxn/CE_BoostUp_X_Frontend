import React from "react";
import "../../css/tasks.css";
import AllUnits from "./AllUnits";
import Completed from "./Completed";
import SearchName from "./SearchName";

const VerticalLine = () => {
  return (
    <div className="px-4 text-5xl font-thin font-sans text-white text-opacity-30">
      l
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 h-[60px] rounded-xl bg-purple-joker flex justify-start items-center px-4">
        <SearchName />
        <VerticalLine />
        <AllUnits />
        <VerticalLine />
        <Completed />
      </div>
    </div>
  );
};

export default SearchBar;
