import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";

import WatchPlayLeft from "../Components/WatchPlayLeft";
import RecommendedVideosList from "../Components/RecommendedVideosList";

export default function WatchPlay() {
  const location = useLocation();
  const { vidInfo } = location.state;
  return (
    <div className="max-h-screen overflow-hidden ">
      <div style={{ height: "7.5vh" }}>
        <Header />
      </div>
      <div className="flex overflow-y-scroll" style={{ height: "92.5vh" }}>
        <WatchPlayLeft item={vidInfo} />
        <RecommendedVideosList item={vidInfo.snippet.title} />
      </div>
    </div>
  );
}
