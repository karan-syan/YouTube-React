import { useRef } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import NextPageBtn from "../Components/NextPageBtn";
import Sidebar from "../Components/Sidebar";
import SkeletonVideoBox from "../Components/SkeletonVideoBox";
import ListVideoBox from "../Components/ListVideoBox";
import { ApplicationState } from "../redux/roots/rootreducer";
import { searchvidtype } from "../utils/types";

export default function Search() {
  const youtubeloader = useSelector(
    (state: ApplicationState) => state.get_youtube_loader
  );
  const youtubesearchpage = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );
  const elementForScroll = useRef<HTMLDivElement>(null);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        <div
          className=" flex flex-wrap w-10/12 px-5 justify-start overflow-y-scroll pb-8"
          ref={elementForScroll}
        >
          {youtubeloader
            ? SkeletonVideoBox(20, "list")
            : youtubesearchpage[0].map((item: searchvidtype, index: number) => {
                return (
                  <ListVideoBox
                    key={index}
                    item={item}
                    ch={60}
                    ch_img={true}
                    desc={true}
                  />
                );
              })}
          {youtubeloader ? null : (
            <div className="flex justify-center w-full">
              <NextPageBtn scrollElement={elementForScroll} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
