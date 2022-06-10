import React from "react";
import { TbMinusVertical } from "react-icons/tb";
import { IoSearchOutline, IoCaretDown } from "react-icons/io5";

const SearchName = () => {
  return (
    <div className="rounded-xl bg-purple-search bg-opacity-50 md:w-[300px] w-1/3 h-[37px] flex justify-between items-center">
      <input
        className="px-5 bg-transparent focus:outline-none md:w-11/12 w-full"
        placeholder="Search name"
      ></input>
      <button className="text-2xl pr-2">
        <IoSearchOutline />
      </button>
    </div>
  );
};

const AllUnits = () => {
  return (
    <button className="rounded-xl bg-purple-search bg-opacity-50 md:w-[150px] w-1/3 h-[37px] flex justify-between items-center px-3">
      <div className="text-white text-opacity-75 md:text-base text-xs">
        All Units
      </div>
      <div>
        <IoCaretDown />
      </div>
    </button>
  );
};

const Completed = () => {
  return (
    <button className="rounded-xl bg-purple-search bg-opacity-50 md:w-[150px] w-1/3 h-[37px] flex justify-start items-center">
      <div className="text-2xl pl-2 md:pr-5 pr-2">
        <IoSearchOutline />
      </div>
      <div className="text-white text-opacity-75 md:text-base text-xs">
        Completed
      </div>
    </button>
  );
};

const VerticalLine = () => {
  return (
    <div className="mx-2 text-5xl">
      <TbMinusVertical />
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
