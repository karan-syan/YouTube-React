import React from "react";
import Navbar from "../Components/Navbar";

export default function WatchPlay() {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex mt-1" style={{ height: "92.5vh" }}></div>
    </div>
  );
}
