import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeYouTubeVideosBox from "./HomeYouTubeVideosBox";
import { get_youtube_data } from "../redux/reducers/youtubedatareducer";
import { ApplicationState } from "../redux/roots/rootreducer";
import { searchvidtype } from "../utils/types";
import NextPageBtn from "./NextPageBtn";

export default function HomeVideos() {
  const youtubehomepage = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );

  return (
    <div className=" flex flex-wrap w-10/12 px-5 justify-evenly overflow-y-scroll pb-8">
      {youtubehomepage.map((item: searchvidtype, index: number) => {
        return <HomeYouTubeVideosBox key={index} item={item} />;
      })}
      <NextPageBtn />
    </div>
  );
}
