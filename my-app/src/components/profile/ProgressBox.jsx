import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressBox = () => {
  return (
    <div className="basis-1/2 flex flex-col mb-10">
      <div className="your-stat-header">Your Progress</div>
      <div className="your-stat-layout">
        <div className="your-stat-text">
          <div className="flex flex-col justify-center text-white p-6">
            <div className="text-center">Progress</div>
            <div className="text-center pt-2">0.00%</div>
            <div className="pt-6">
              <ProgressBar value={25} max={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBox;
