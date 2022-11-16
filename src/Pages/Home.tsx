import HomeVideos from "../Components/HomeVideos";
import React, { useEffect } from "react";
import { callapi } from "../redux/actions/callapi";
import { useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    let search: string = "coding";
    let token: string = "";
    dispatch(callapi({ search, token }));
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
