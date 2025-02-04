import React from "react";
import { Ellipse } from "../Svgs";

const HeroBlur = () => {
  return (
    <div className="flex blur-3xl w-full h-[500px] justify-center items-center absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] -z-10 ">
      <Ellipse r={90} fill="oklch(78.29% 0.1006 243.74)" />
      <Ellipse r={90} fill="oklch(78.29% 0.1006 143.74)" />
      <Ellipse r={90} fill="oklch(78.29% 0.1006 43.74)" />
    </div>
  );
};

export default HeroBlur;
