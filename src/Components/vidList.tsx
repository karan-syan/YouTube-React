import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { searchvidtype } from "../utils/types";
interface Iprops {
  item: searchvidtype;
  ch: number;
  ch_img: boolean;
  description: boolean;
}

export default function VidList({ item, ch, ch_img, description }: Iprops) {
  const views: number = Math.floor(Math.random() * 1000);

  return (
    <Link
      className="flex cursor-pointer px-2 pt-1 rounded-xl pb-1 active:bg-zinc-200"
      to={`/watch/${item.id.videoId}`}
      state={{ vidInfo: item }}
    >
      <div className="flex justify-center items-center">
        <img
          className="rounded-md object-contain"
          src={item.snippet.thumbnails.medium.url}
          alt={""}
        />
      </div>
      <div className=" flex items-start ml-3 justify-center mt-2">
        <div>
          <div className="flex items-center">
            <p
              className=" line-clamp-2 text-base font-bold mr-4"
              style={{ width: `${ch}ch` }}
            >
              {item.snippet.title}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              {ch_img ? (
                <img
                  src={item.snippet.thumbnails.default.url}
                  className="rounded-full h-8 w-8 mt-3 mb-3 mr-2"
                  alt={""}
                />
              ) : null}
              <p className="pt-1 text-xs flex items-center text-zinc-500">
                {item.snippet.channelTitle}
                {views > 500 ? (
                  <IoCheckmarkCircleOutline className="ml-2 text-zinc-500" />
                ) : null}
              </p>
            </div>
            <p className="text-xs text-zinc-500">{views}k views</p>
            {description ? (
              <p className="text-xs text-zinc-500 mt-1">
                {item.snippet.description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
