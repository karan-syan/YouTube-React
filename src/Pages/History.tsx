import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import GridVideoBox from "../Components/GridVideoBox";
import Header from "../Components/Header";
import ListVideoBox from "../Components/ListVideoBox";
import Sidebar from "../Components/Sidebar";
import SkeletonVideoBox from "../Components/SkeletonVideoBox";
import { ApplicationState } from "../redux/roots/rootreducer";
import { searchvidtype } from "../utils/types";

export default function History() {
  const youtubeloader = useSelector(
    (state: ApplicationState) => state.get_youtube_loader
  );
  const youtubeHistorydata = useSelector(
    (state: ApplicationState) => state.get_recent_data
  );
  useEffect(() => {
    console.log("hell in 1", youtubeHistorydata);
  }, [youtubeHistorydata]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Header />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        <div className=" flex flex-wrap w-10/12 px-5 justify-start overflow-y-scroll pb-8">
          {youtubeloader
            ? SkeletonVideoBox(20, "grid")
            : youtubeHistorydata.map((item: searchvidtype, index: number) => {
                return <GridVideoBox key={index} item={item} />;
              })}
        </div>
      </div>
    </div>
  );
}
