import React, { useState, useEffect } from "react";
import FullCard from "./components/FullCard";
import Section from "./components/Section";

const Topbar = () => {
  // based off of time of day
  const [welcomeText, setWelcomeText] = useState("d");
  const getHours = () => new Date().getHours();

  useEffect(() => {
    //eslint-disable-next-line
    const text = () => {
      const h = getHours();
      if (h < 12) {
        return "Good morning";
      } else if (h < 18) {
        return "Good afternoon";
      } else {
        return "Good evening";
      }
    };
    setWelcomeText(text());
  }, []);
  return (
    <div className="flex-grow mb-[26px] mr-4 p-4 bg-gradient-to-b from-indigo-800 via-[#121212] to-[#171717] border border-[#171717] rounded-[14px] overflow-y-auto scrollbar">
      <h1 className="p-3 text-3xl font-bold">{welcomeText}</h1>
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2">
        {Array.from({ length: 6 }, () => (
          <FullCard key={Math.random()} />
        ))}
      </div>
      <div className="">
        <Section header="What's new" />
        <Section header="Jump back in" />
        <Section header="Based on your recent listening" />
      </div>
    </div>
  );
};

export default Topbar;
