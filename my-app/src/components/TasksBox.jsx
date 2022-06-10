import React from "react";
import { IoMdSunny } from "react-icons/io";

const TasksBox = () => {
  return (
    <button className="w-[280px] h-[100px] rounded-xl bg-black-mission-box px-2 mt-4 flex flex-col items-center justify-start">
      <div className="flex justify-center pt-2">XXXXXXXXXXXXXXXXXXXXXX</div>
      <div className="flex justify-center pt-2">BASIC  I\O</div>
      <div className="flex justify-center text-yellow-300 pt-2">
        <IoMdSunny/>
        <IoMdSunny/>
        <IoMdSunny/>
        <IoMdSunny/>
        <IoMdSunny/>
      </div>
    </button>
  );
};

export default TasksBox;
