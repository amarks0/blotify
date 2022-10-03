import React from "react"; //imr
import { TbPhoto } from "react-icons/tb";

const FullCard = () => {
  return (
    <div className="h-16 transition duration-500 bg-gray-500 border border-transparent rounded-lg cursor-pointer bg-opacity-30 hover:bg-opacity-40 hover:shadow-lg">
      <div className="flex flex-row items-center">
        <TbPhoto className="w-16 h-16 stroke-indigo-500" />
        <span className="font-bold tracking-wide ">Card Title</span>
      </div>
    </div>
  );
};

export default FullCard;
