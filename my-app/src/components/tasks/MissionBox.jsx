import React from "react";
import TasksBox from "./TasksBox";

const MissionBox = () => {
  return (
    <div className="flex justify-center py-[44px] pb-0">
      <div className="w-11/12 pb-10">
        <div className="w-full h-[60px] rounded-t-xl bg-purple-joker flex justify-center items-center text-xl">
          Available Mission
        </div>
        <div className="w-full min-h-[505px] rounded-b-xl bg-gray-mission-box bg-opacity-40 flex justify-center">
          <div className="w-full flex flex-wrap justify-around items-center mb-5 mt-3">
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
            <TasksBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionBox;
