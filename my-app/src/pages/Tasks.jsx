import React from "react";
import MissionBox from "../components/MissionBox";
import SearchBar from "../components/SearchBar";
import "../css/tasks.css";

const Tasks = () => {
  return (
    <div className="tasks-layout">
      <SearchBar />
      <MissionBox />
    </div>
  );
};

export default Tasks;
