import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import SkeletonVideoBox from "../Components/SkeletonVideoBox";
import ListVideoBox from "../Components/ListVideoBox";
import { ApplicationState } from "../redux/roots/rootreducer";
import { AiOutlineArrowRight } from "react-icons/ai";
import { searchvidtype } from "../utils/types";
import CustomBtn from "../Components/CustomBtn";
import { callapi, setloader } from "../redux/actions/callapi";

export default function Search() {
  const youtubeloader = useSelector(
    (state: ApplicationState) => state.get_youtube_loader
  );
  const youtubedata = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );
  const elementForScroll = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Header />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        <div
          className=" flex flex-wrap w-10/12 px-5 justify-start overflow-y-scroll pb-8"
          ref={elementForScroll}
        >
          {youtubeloader
            ? SkeletonVideoBox(20, "list")
            : youtubedata[0].map((item: searchvidtype, index: number) => {
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
            <div className="w-full flex justify-end items-end">
              <CustomBtn
                color="bg-red-500 text-white active:bg-red-700 hover:bg-red-600 py-2"
                icon={<AiOutlineArrowRight className="text-white" />}
                varient="rounded"
                value={"Next Page"}
                onclick={() => {
                  let search: string = youtubedata[2];
                  let token: string = youtubedata[1];
                  dispatch(setloader(true));
                  elementForScroll.current?.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  dispatch(callapi({ search, token }));
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
