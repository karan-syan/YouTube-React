import React from "react";
import HomeVideos from "../Components/HomeVideos";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

export default function Home() {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        <HomeVideos />
      </div>
    </div>
  );
}
