import React from "react";
import { useState } from "react";
import { IoMdSunny } from "react-icons/io";

const TasksBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="md:w-[400px] w-[250px] h-[150px] rounded-xl bg-black-mission-box px-2 mt-4 flex flex-col items-center justify-start"
      >
        <div className="flex justify-center pt-9">XXXXXXXXXXXXXXXXXXXXXX</div>
        <div className="flex justify-center pt-2">BASIC I\O</div>
        <div className="flex justify-center text-yellow-300 pt-2">
          <IoMdSunny />
          <IoMdSunny />
          <IoMdSunny />
          <IoMdSunny />
          <IoMdSunny />
        </div>
      </button>
      {isOpen && (
        <div className="w-full h-full flex justify-center items-center relative">
          <div onClick={toggleModal} className="w-screen h-screen bg-black/70 absolute"></div>
          <div className="px-20 py-10 bg-white text-3xl shadow-lg rounded absolute">
            Hello World
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksBox;
