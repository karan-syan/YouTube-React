import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { searchvidtype } from "../utils/types";
interface Iprops {
  item: searchvidtype;
}

export default function HomeYouTubeVideosBox({ item }: Iprops) {
  const views: number = Math.floor(Math.random() * 1000);

  return (
    <Link
      className="flex cursor-pointer flex-col mb-4 w-min px-2 pt-2 rounded-xl pb-2 active:bg-zinc-200"
      to={`/watch/${item.id.videoId}`}
      state={{ vidInfo: item }}
    >
      <div className="flex justify-center">
        <img
          className="rounded-2xl"
          src={item.snippet.thumbnails.medium.url}
          alt={""}
        />
      </div>
      <div className=" flex items-start justify-center mt-2">
        <img
          src={item.snippet.thumbnails.default.url}
          className="rounded-full h-9 w-9 mt-1 ml-5 mr-2"
          alt={""}
        />
        <div>
          <div className="flex items-center">
            <p
              className=" line-clamp-2 text-base font-bold mr-4"
              style={{ width: "25ch" }}
            >
              {item.snippet.title}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="pt-1 text-xs flex items-center text-zinc-500">
              {item.snippet.channelTitle}
              {views > 500 ? (
                <IoCheckmarkCircleOutline className="ml-2 text-zinc-500" />
              ) : null}
            </p>
            <p className="text-xs text-zinc-500">{views}k views</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
