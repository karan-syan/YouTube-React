import React from "react";
interface homepagevidprops {
  item: {
    kind: string;
    etag: string;
    id: {
      kind: string;
      videoId: string;
    };
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      liveBroadcastContent: string;
      publishTime: string;
    };
  };
}

export default function HomeYouTubeVideosBox({ item }: homepagevidprops) {
  return (
    <div className="flex cursor-pointer flex-col relative justify-center mb-4 w-1/4 px-2 pt-1 rounded-xl pb-2 active:bg-zinc-200">
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
          {/* <p className="text-sm text-zinc-400">{item.snippet.channelTitle}</p> */}
        </div>
      </div>
    </div>
  );
}
