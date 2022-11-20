import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../Components/Header";

import WatchPlayLeft from "../Components/WatchPlayLeft";
import RecommendedVideosList from "../Components/RecommendedVideosList";
import { useSelector } from "react-redux";
import { ApplicationState } from "../redux/roots/rootreducer";
import { searchvidtype } from "../utils/types";

export default function WatchPlay() {
  const youtubedata = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );
  const { id } = useParams();
  let vidInfo = youtubedata[0].find((o) => o.id.videoId === id);

  return (
    <div className="max-h-screen overflow-hidden ">
      <div style={{ height: "7.5vh" }}>
        <Header />
      </div>
      {vidInfo !== undefined ? (
        <div className="flex overflow-y-scroll" style={{ height: "92.5vh" }}>
          <WatchPlayLeft item={vidInfo} />
          <RecommendedVideosList item={vidInfo.snippet.title} />
        </div>
      ) : null}
    </div>
  );
}
