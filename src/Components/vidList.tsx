import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { searchvidtype } from "../utils/types";
import { Api_Distructing } from "../utils/ApiDistruct";
import Avatar from "./Avatar";
interface Iprops {
  item: searchvidtype;
  ch: number;
  ch_img: boolean;
  desc: boolean;
}

export default function VidList({ item, ch, ch_img, desc }: Iprops) {
  const views: number = Math.floor(Math.random() * 1000);
  const { channelTitle, title, videoId, ThumbnailMedium, description } =
    Api_Distructing(item);

  return (
    <Link
      className="flex cursor-pointer px-2 pt-1 rounded-xl pb-1 active:bg-zinc-200"
      to={`/watch/${videoId}`}
      state={{ vidInfo: item }}
    >
      <div className="flex justify-center items-center">
        <img
          className="rounded-md object-contain"
          src={ThumbnailMedium}
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
              {title}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              {ch_img ? (
                <Avatar item={ThumbnailMedium} varient="Search" />
              ) : null}
              <p className="pt-1 text-xs flex items-center text-zinc-500">
                {channelTitle}
                {views > 500 ? (
                  <IoCheckmarkCircleOutline className="ml-2 text-zinc-500" />
                ) : null}
              </p>
            </div>
            <p className="text-xs text-zinc-500">{views}k views</p>
            {desc ? (
              <p className="text-xs text-zinc-500 mt-1">{description}</p>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
