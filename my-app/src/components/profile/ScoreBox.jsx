import React from "react";

const ScoreBox = () => {
  const Place = () => {
    return (
      <div className="your-stat-text">
        <div className="flex flex-col justify-center text-white">
          <div>Place</div>
          <div className="text-center pt-2 text-2xl md:text-4xl">#0</div>
        </div>
      </div>
    );
  };

  const ScorePoint = () => {
    return (
      <div className="your-stat-text">
        <div className="flex flex-col justify-center text-white">
          <div>Score</div>
          <div className="text-center pt-2 text-2xl md:text-4xl">0</div>
          <div className="text-center pt-2">Point</div>
        </div>
      </div>
    );
  };

  return (
    <div className="basis-1/2">
      <div className="your-stat-header">Your Score</div>
      <div className="your-stat-score">
        <Place />
        <ScorePoint />
      </div>
    </div>
  );
};

export default ScoreBox;
