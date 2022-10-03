import React from "react"; //imr
import { BiCollection, BiHeartSquare } from "react-icons/bi";
import { BsFillPlusSquareFill, BsFillBookmarksFill } from "react-icons/bs";
import {GoTriangleRight} from "react-icons/go"

const Sidebar = () => {
  // const iconTheme = "";
  //fcc
  return (
    <div className="flex text-sm flex-col w-64 py-2 px-4 bg-[#171717] border border-[#171717] rounded-[14px] mx-2 mb-[26px]">
      <div className="divide-y divide-gray-600">
        <div className="flex flex-col mt-4 mb-3 space-y-3">
          <div className="flex flex-row items-center transition ease-in-out cursor-pointer group delay-50 group-hover:transition-all">
            <BiCollection className="w-6 h-6 -rotate-90 fill-gray-300 group-hover:fill-indigo-500" />
            <span className="pl-3 tracking-wide group-hover:text-indigo-500">
              Your Library
            </span>
          </div>
          <div className="flex flex-row items-center transition ease-in-out cursor-pointer group delay-50 group-hover:transition-all">
            <BsFillPlusSquareFill className="w-6 h-6 fill-gray-300 group-hover:fill-indigo-500" />
            <span className="pl-3 tracking-wide group-hover:text-indigo-500">
              Create Playlist{" "}
            </span>
          </div>
          <div className="flex flex-row items-center transition ease-in-out cursor-pointer group delay-50 group-hover:transition-all">
            <BiHeartSquare className="w-6 h-6 fill-gray-300 group-hover:fill-indigo-500" />
            <span className="pl-3 tracking-wide group-hover:text-indigo-500">
              Liked Songs{" "}
            </span>
          </div>
          <div className="flex flex-row items-center transition ease-in-out cursor-pointer group delay-50 group-hover:transition-all">
            <BsFillBookmarksFill className="w-6 h-6 fill-gray-300 group-hover:fill-indigo-500" />
            <span className="pl-3 tracking-wide group-hover:text-indigo-500">
              Your Episodes
            </span>
          </div>
        </div>
        <ul className="w-full space-y-2 text-gray-300">
          <li className="cursor-pointer hover:text-indigo-500">Playlist Name</li>
          <li className="cursor-pointer hover:text-indigo-500">Playlist Name</li>
          <li className="flex flex-row items-center cursor-pointer group hover:text-indigo-500 group-hover:transition-all">
            <span>Playlist Group</span>
            <GoTriangleRight className="w-4 h-4 fill-gray-300 group-hover:fill-indigo-500"/>
          </li>
          <li className="cursor-pointer hover:text-indigo-500">Playlist Name</li>
          <li className="cursor-pointer hover:text-indigo-500">Playlist Name</li>
          <li className="cursor-pointer hover:text-indigo-500">Playlist Name</li>
          <li className="cursor-pointer hover:text-indigo-500">Playlist Name</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
