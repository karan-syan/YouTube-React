import React from "react";
interface iprops {
  item: string;
}

export default function Avatar({ item }: iprops) {
  return (
    <img
      className="rounded-full p-1 cursor-pointer w-10 h-10"
      src={item}
      alt={""}
    />
  );
}
