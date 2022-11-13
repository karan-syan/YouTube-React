import React from "react";
import { useSelector } from "react-redux";
import HomeYouTubeVideosBox from "./HomeYouTubeVideosBox";
import { get_youtube_data } from "../redux/reducers/youtubedatareducer";
export default function HomeVideos() {
  const youtubehomepage = useSelector((state: any) => state.get_youtube_data);
  return (
    <div className=" flex flex-wrap w-10/12 p-5 overflow-y-scroll pb-8 ">
      {youtubehomepage.map((item: any, index: number) => {
        return <HomeYouTubeVideosBox key={index} item={item} />;
      })}
    </div>
  );
}
