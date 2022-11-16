import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import NextPageBtn from "../Components/NextPageBtn";
import Sidebar from "../Components/Sidebar";
import VidList from "../Components/VidList";
import { ApplicationState } from "../redux/roots/rootreducer";
import { searchvidtype } from "../utils/types";

export default function Search() {
  const youtubesearchpage = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        <div className=" flex flex-wrap w-10/12 px-5 justify-start overflow-y-scroll pb-8">
          {youtubesearchpage[0].map((item: searchvidtype, index: number) => {
            return (
              <VidList
                key={index}
                item={item}
                ch={60}
                ch_img={true}
                description={true}
              />
            );
          })}
          <div className="flex justify-center w-full">
            <NextPageBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
