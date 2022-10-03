import React from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import User from "./User";
import Home from "./Home";
import Search from "./Search";

const Topbar = () => {
  return (
    <div className="absolute z-50 w-full h-16 px-3 py-2 bg-black">
      <div className="flex flex-row items-center">
          <Logo className="w-8 h-8" />
        <div className="flex flex-row justify-center space-x-2 grow">
          <Home />
          <Search />
        </div>
          <User />
      </div>
    </div>
  );
};

export default Topbar;
