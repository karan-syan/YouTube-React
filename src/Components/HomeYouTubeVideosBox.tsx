import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { searchvidtype } from "../utils/types";
import { Api_Distructing } from "../utils/ApiDistruct";
import Avatar from "./Avatar";
interface Iprops {
  item: searchvidtype;
}

export default function HomeYouTubeVideosBox({ item }: Iprops) {
  const views: number = Math.floor(Math.random() * 1000);
  const { channelTitle, title, videoId, ThumbnailMedium } =
    Api_Distructing(item);

  return (
    <Link
      className="flex cursor-pointer flex-col mb-4 w-min px-2 pt-2 rounded-xl pb-2 active:bg-zinc-200"
      to={`/watch/${videoId}`}
      state={{ vidInfo: item }}
    >
      <div className="flex justify-center">
        <img className="rounded-2xl" src={ThumbnailMedium} alt={""} />
      </div>
      <div className=" flex items-start justify-center mt-2">
        <Avatar item={ThumbnailMedium} varient="HomePage" />
        <div>
          <div className="flex items-center">
            <p
              className=" line-clamp-2 text-base font-bold mr-4"
              style={{ width: "25ch" }}
            >
              {title}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="pt-1 text-xs flex items-center text-zinc-500">
              {channelTitle}
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
