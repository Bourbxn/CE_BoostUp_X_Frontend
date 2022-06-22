import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Completed = () => {
  return (
    <button className="rounded-xl bg-purple-search bg-opacity-50 md:w-[150px] w-1/5 h-[37px] flex justify-start items-center">
      <div className="text-2xl pl-2 md:pr-5 pr-2">
        <IoCheckmarkOutline />
      </div>
      <div className="text-white text-opacity-75 text-base md:visible invisible">
        Completed
      </div>
    </button>
  );
};

export default Completed;
