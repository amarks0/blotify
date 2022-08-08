import React from "react";

//rafce
const Player = () => {
  return (
    <div className="absolute bottom-0 w-full h-20 bg-[#181818] p-3 border-[#282828] border-t shadow-lg">
      <div className="flex flex-row items-center justify-between">
        <div className="w-1/3">Album</div>
        <div className="flex flex-col w-1/3">
          <span>Player Controls</span>
          <span>Music Progress</span>
        </div>
        <div className="w-1/3">Icons</div>
      </div>
    </div>
  );
};

export default Player;
