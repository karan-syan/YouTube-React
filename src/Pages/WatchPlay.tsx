import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";

import WatchPlayLeft from "../Components/WatchPlayLeft";
import WatchPlayRight from "../Components/WatchPlayRight";

export default function WatchPlay() {
  const location = useLocation();
  const { vidInfo } = location.state;
  return (
    <div className="max-h-screen overflow-hidden ">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex overflow-y-scroll" style={{ height: "92.5vh" }}>
        <WatchPlayLeft item={vidInfo} />
        <WatchPlayRight item={vidInfo.snippet.title} />
      </div>
    </div>
  );
}
