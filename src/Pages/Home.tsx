import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HomeVideos from "../Components/HomeVideos";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { callapi } from "../redux/actions/callapi";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callapi("coding"));
  }, [dispatch]);
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
