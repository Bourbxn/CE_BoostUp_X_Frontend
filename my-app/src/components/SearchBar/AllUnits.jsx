import React from "react";
import { useState } from "react";
import { IoCaretDown } from "react-icons/io5";

const AllUnits = () => {
  const units = [
    { key: 1, name: "Basic I/O" },
    { key: 2, name: "If-Else" },
    { key: 3, name: "Loop" },
    { key: 4, name: "Array" },
    { key: 5, name: "Pattern" },
    { key: 6, name: "Reverse Engineer" },
    { key: 7, name: "CTF" },
  ];

  const [isShowUnits, setIsShowUnits] = useState(false);

  const showAllUnits = () => {
    setIsShowUnits(!isShowUnits);
  };

  return (
    <div>
      <button
        onClick={showAllUnits}
        className="rounded-xl bg-purple-search bg-opacity-50 md:w-[150px] w-full h-[37px] flex justify-between items-center px-3"
      >
        <div className="text-white text-opacity-75 text-base md:visible invisible">
          All Units
        </div>
        <div>
          <IoCaretDown />
        </div>
      </button>
      {isShowUnits && (
        <ul className="bg-gray-800 rounded-xl w-[150px] h-[200px] absolute pt-4 pl-4 mt-1">
          {units.map((unit) => {
            return (
              <li key={unit.key} className="dropdown-units">
                {unit.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AllUnits;
