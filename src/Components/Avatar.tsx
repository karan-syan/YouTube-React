import React from "react";
interface iprops {
  item: string;
  varient?: "HomePage" | "Search" | "default";
}

export default function Avatar({ item, varient }: iprops) {
  return (
    <img
      className={`${
        varient === "HomePage"
          ? "rounded-full h-9 w-9 mt-1 ml-5 mr-2"
          : varient === "Search"
          ? "rounded-full h-8 w-8 mt-3 mb-3 mr-2"
          : "rounded-full p-1 cursor-pointer w-10 h-10"
      }`}
      src={item}
      alt={""}
    />
  );
}
