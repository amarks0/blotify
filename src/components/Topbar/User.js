import React from "react";
import { HiOutlineUser } from "react-icons/hi";

const User = () => {
  return (
    <div className="bg-[#242424] border border-black rounded-full cursor-pointer p-3" title="User">
          <HiOutlineUser className="w-6 h-6 stroke-white hover:stroke-indigo-600" />
    </div>
  );
};

export default User;
