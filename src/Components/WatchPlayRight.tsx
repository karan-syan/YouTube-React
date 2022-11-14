import React, { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { searchvidtype } from "../utils/types";
import { RiShareForwardLine, RiDownloadLine } from "react-icons/ri";
import Avatar from "./Avatar";
interface Iprops {
  item: searchvidtype;
}
export default function WatchPlayRight({ item }: Iprops) {
  const [subscribe, setsubscribe] = useState<boolean>(false);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "525",
    width: "930",
    playerVars: {
      autoplay: 1,
    },
  };

  function subscription() {
    if (subscribe) {
      if (window.confirm(`Unsubscribe from ${item.snippet.channelTitle}`)) {
        setsubscribe(false);
      }
    } else {
      setsubscribe(true);
    }
  }

  return (
    <div className="flex flex-col w-4/6 ">
      <div className="flex px-3 ml-8 flex-col">
        <div className="flex">
          <YouTube
            videoId={item.id.videoId}
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
        <div className="flex pt-3">
          <p className="text-xl font-bold">{item.snippet.title}</p>
        </div>
        <div className="flex flex-row pt-1 justify-between">
          <div className="flex">
            <div className="flex">
              <Avatar />
            </div>
            <div className="flex flex-col px-2 pr-7 justify-center">
              <p className="text-center text-base font-semibold">
                {item.snippet.channelTitle}
              </p>
            </div>
            <div
              className={`flex ${
                subscribe ? "bg-zinc-200 text-black" : "bg-black text-white"
              } px-4 rounded-3xl`}
            >
              <button onClick={subscription}>
                {subscribe ? "Subscribed" : "Subscribe"}
              </button>
            </div>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}
