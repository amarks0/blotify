import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Search = () => {
  const placeholder = "What do you want to listen to?";
  return (
    <div className="bg-[#242424] flex flex-row items-center transition ease-in-out border-black cursor-text group delay-50 text-gray-300 group-hover:transition-all px-3 py-1 border rounded-full ">
      <HiOutlineSearch className="w-6 h-6 stroke-gray-300 group-hover:stroke-indigo-600 delay-50" />
      <input
        type="text"
        maxLength="800"
        className=" w-[440px] pl-2 tracking-wide h-8 bg-[#242424] text-sm group-hover:text-indigo-600 sm:w-[400px]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
