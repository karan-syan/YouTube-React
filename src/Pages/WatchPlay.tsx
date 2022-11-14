import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import WatchPlayRight from "../Components/WatchPlayRight";

export default function WatchPlay() {
  const location = useLocation();
  const { vidInfo } = location.state;
  return (
    <div className="max-h-screen overflow-hidden ">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex mt-3 overflow-y-scroll" style={{ height: "92.5vh" }}>
        {/* <WatchPlayRight /> */}
        <WatchPlayRight item={vidInfo} />
      </div>
    </div>
  );
}
