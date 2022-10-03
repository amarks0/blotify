import React from "react";
import MiniCard from "./MiniCard";

const Section = ({ header }) => {
  return (
    <section className="mt-5">
      <div className="flex flex-row">
        <div className="flex justify-start text-xl font-bold tracking-wide">
          {header}{" "}
        </div>
        <div className="flex justify-end text-xs text-left uppercase">
          See All
        </div>
      </div>
      <div className="grid xl:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
        {Array.from({ length: 8 }, () => (
          <MiniCard key={Math.random()} />
        ))}
      </div>
    </section>
  );
  //max number of cards is 9 based on screen size
};

export default Section;
