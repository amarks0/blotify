import React from "react"; //imr
import { ReactComponent as Logo } from "../../logo.svg";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineCollection,
} from "react-icons/hi";

const Sidebar = () => {
  const iconTheme = "";
  //fcc
  return (
    <div className="absolute flex flex-col w-64 p-6 bg-black sm:relative md:h-full ">
      <div className="flex flex-row items-center space-x-2">
        <Logo className="w-10 h-10" />
        <h1 className="text-2xl font-bold tracking-wider">Blotify</h1>
      </div>
      <div className="flex flex-col mt-8 space-y-5 ">
        <div className="flex flex-row items-center transition ease-in-out cursor-pointer delay-50 group group-hover:transition-all">
          <HiOutlineHome className="w-8 h-8 stroke-white group-hover:stroke-indigo-600" />
          <span className="pl-5 tracking-wide group-hover:text-indigo-600">
            Home
          </span>
        </div>
        <div className="flex flex-row items-center transition ease-in-out cursor-pointer group delay-50 group-hover:transition-all">
          <HiOutlineSearch className="w-8 h-8 stroke-white group-hover:stroke-indigo-600 delay-50" />
          <span className="pl-5 tracking-wide group-hover:text-indigo-600">
            Search
          </span>
        </div>
        <div className="flex flex-row items-center transition ease-in-out cursor-pointer group delay-50 group-hover:transition-all ">
          <HiOutlineCollection className="w-8 h-8 -rotate-90 stroke-white group-hover:stroke-indigo-600 delay-50" />
          <span className="pl-5 tracking-wide group-hover:text-indigo-600">
            My Library
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
