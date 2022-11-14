import axios from "axios";
import React, { useEffect } from "react";
import { searchvidtype } from "../utils/types";
interface Iprops {
  item: searchvidtype;
}

export default function HomeYouTubeVideosBox({ item }: Iprops) {
  return (
    <div className="flex cursor-pointer flex-col relative justify-center mb-4 w-1/4 px-2 pt-2 rounded-xl pb-2 active:bg-zinc-200">
      <div className="flex relative justify-center">
        <img className="rounded-2xl" src={item.snippet.thumbnails.medium.url} />
      </div>
      <div className="relative flex flex-col justify-start">
        <div className="flex">
          {/* <img src={} className="rounded-full" /> */}

          <p
            className=" line-clamp-2 text-base font-bold"
            style={{ width: "25ch" }}
          >
            {item.snippet.title}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pt-1 text-sm text-zinc-400">
            {item.snippet.channelTitle}
          </p>
          {/* <p className="text-sm text-zinc-400">{item.snip pet.channelTitle}</p> */}
        </div>
      </div>
    </div>
  );
}
