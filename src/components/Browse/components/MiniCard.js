import React from "react"; //imr
import { TbPhoto } from "react-icons/tb";

const MiniCard = () => {
  return (
    <div className="w-40 m-2 transition duration-500 bg-gray-500 border border-transparent rounded-lg cursor-pointer h-60 bg-opacity-30 hover:bg-opacity-40 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <TbPhoto className="w-32 h-32 stroke-indigo-500" />
        <span className="font-bold tracking-wide ">List Title</span>
        <span className="text-sm tracking-wide text-gray-300 ">Artist/Created By</span>

      </div>
    </div>
  );
};

export default MiniCard;
