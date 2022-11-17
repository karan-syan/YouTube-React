import React, { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { searchvidtype } from "../utils/types";
import { RiShareForwardLine, RiDownloadLine } from "react-icons/ri";
import { BsBell, BsThreeDots } from "react-icons/bs";
import { BiWinkSmile } from "react-icons/bi";

import { AiOutlineLike, AiOutlineDislike, AiOutlineSend } from "react-icons/ai";
import Avatar from "./Avatar";
import { MdOutlineSort } from "react-icons/md";
import { Api_Distructing } from "../utils/ApiDistruct";
interface Iprops {
  item: searchvidtype;
}
export default function WatchPlayLeft({ item }: Iprops) {
  const [subscribe, setsubscribe] = useState<boolean>(false);
  const [send, setsend] = useState<boolean>(false);
  const likes: number = Math.floor(Math.random() * 100);
  const {
    channelTitle,
    title,
    videoId,
    ThumbnailMedium,
    description,
    publishedAt,
  } = Api_Distructing(item);
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "480",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  function subscription() {
    if (subscribe) {
      if (window.confirm(`Unsubscribe from ${channelTitle}`)) {
        setsubscribe(false);
      }
    } else {
      setsubscribe(true);
    }
  }

  return (
    <div className="flex flex-col w-4/6 ">
      <div className="flex px-3 ml-20 mt-5 flex-col w-">
        <div className="flex w-full">
          <YouTube
            style={{ width: "100%" }}
            videoId={videoId}
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
        <div className="flex pt-3">
          <p className="text-xl font-bold">{title}</p>
        </div>
        <div className="flex flex-row pt-1 justify-between">
          <div className="flex">
            <div className="flex cursor-pointer">
              <Avatar item={ThumbnailMedium} />
            </div>
            <div className="flex flex-col px-2 pr-7 justify-center cursor-pointer">
              <p className="text-center text-base font-semibold">
                {channelTitle}
              </p>
            </div>
            <div
              className={`flex ${
                subscribe
                  ? "bg-zinc-200 text-black hover:bg-zinc-300"
                  : "bg-black text-white hover:bg-zinc-800"
              } px-4 rounded-3xl`}
            >
              <button onClick={subscription}>
                {subscribe ? "Subscribed" : "Subscribe"}
              </button>
            </div>
            <div className="flex flex-col justify-center ml-2 active:bg-zinc-200 rounded-full px-2">
              <button>
                <BsBell className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="flex mr-5 ">
            <button className="flex flex-row justify-center items-center bg-zinc-200 px-4 ml-1 rounded-l-full hover:bg-zinc-200 active:bg-zinc-300">
              <AiOutlineLike className="text-2xl" />
              <p className="text-sm pl-1">{likes}k</p>
            </button>
            <button className="flex flex-row justify-center items-center bg-zinc-200 px-4 mr-1 border-l-2 border-zinc-300 rounded-r-full hover:bg-zinc-200 active:bg-zinc-300">
              <AiOutlineDislike className="text-2xl" />
            </button>
            <button className="flex flex-row justify-center items-center bg-zinc-200 px-4 mx-1 rounded-3xl hover:bg-zinc-200 active:bg-zinc-300">
              <RiDownloadLine className="text-2xl" />
              <p className="text-sm pl-1">Download</p>
            </button>
            <button className="flex flex-row justify-center items-center bg-zinc-200 px-4 mx-1 rounded-3xl hover:bg-zinc-200 active:bg-zinc-300">
              <RiShareForwardLine className="text-2xl" />
              <p className="text-sm pl-1">Share</p>
            </button>
            <button className="flex flex-row justify-center items-center bg-zinc-200 px-2 mx-1 rounded-full hover:bg-zinc-200 active:bg-zinc-300">
              <BsThreeDots className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4 mt-2 bg-zinc-200 rounded-lg">
          <p className="font-bold">{publishedAt.substring(0, 10)}</p>
          <p className="">{description}</p>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex py-3 px-2">
            <p className="mr-6">0 Comments</p>
            <button className="flex justify-center items-center ml-3">
              <MdOutlineSort className="text-xl" />
              <p className=" font-bold">Sort by</p>
            </button>
          </div>
          <div className="flex my-2">
            <Avatar
              item={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
            />
            <div className={"flex items-center flex-col  w-full mx-3  "}>
              <input
                type={"text"}
                placeholder={"Add a comment..."}
                className={"outline-none w-full focus:border-black border-b-2"}
                onFocus={() => {
                  setsend(true);
                }}
              />
              {send ? (
                <div className="flex justify-between w-full my-3">
                  <div className="flex">
                    <button>
                      <BiWinkSmile className="text-2xl" />
                    </button>
                  </div>
                  <div className="flex">
                    <button className="mx-3 font-semibold">cancel</button>
                    <button className="text-zinc-500 font-semibold bg-zinc-200 px-3 py-1 rounded-2xl">
                      comment
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
