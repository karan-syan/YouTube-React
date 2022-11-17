import { useSelector } from "react-redux";
import HomeYouTubeVideosBox from "../Components/HomeYouTubeVideosBox";
import { ApplicationState } from "../redux/roots/rootreducer";
import { searchvidtype } from "../utils/types";
import NextPageBtn from "../Components/NextPageBtn";
import SkeletomVideoBox from "../Components/SkeletomVideoBox";
import React, { useEffect, useRef, useState } from "react";
import { callapi, setloader } from "../redux/actions/callapi";
import { useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

export default function Home() {
  const dispatch = useDispatch();
  const youtubehomepage = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );
  const youtubeloader = useSelector(
    (state: ApplicationState) => state.get_youtube_loader
  );
  useEffect(() => {
    let search: string = "coding";
    let token: string = "";
    dispatch(setloader(true));
    dispatch(callapi({ search, token }));
  }, [dispatch]);
  const elementForScroll = useRef<HTMLDivElement>(null);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        <div
          className=" flex flex-wrap w-10/12 px-5 justify-evenly overflow-y-scroll pb-8"
          ref={elementForScroll}
        >
          {youtubeloader
            ? SkeletomVideoBox(20, "grid")
            : youtubehomepage[0].map((item: searchvidtype, index: number) => {
                return <HomeYouTubeVideosBox key={index} item={item} />;
              })}
          <NextPageBtn scrollElement={elementForScroll} />
        </div>
      </div>
    </div>
  );
}
