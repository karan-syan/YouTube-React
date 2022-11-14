import React from "react";
import { useSelector } from "react-redux";
import HomeYouTubeVideosBox from "./HomeYouTubeVideosBox";
import { get_youtube_data } from "../redux/reducers/youtubedatareducer";
import { ApplicationState } from "../redux/roots/rootreducer";
import { searchvidtype } from "../utils/types";

export default function HomeVideos() {
  const youtubehomepage = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );
  return (
    <div className=" flex flex-wrap w-10/12 px-5 overflow-y-scroll pb-8 mt-3">
      {youtubehomepage.map((item: searchvidtype, index: number) => {
        return <HomeYouTubeVideosBox key={index} item={item} />;
      })}
    </div>
  );
}
