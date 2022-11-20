import { useSelector } from "react-redux";
import GridVideoBox from "../Components/GridVideoBox";
import { ApplicationState } from "../redux/roots/rootreducer";
import { searchvidtype } from "../utils/types";
import SkeletonVideoBox from "../Components/SkeletonVideoBox";
import { useEffect, useRef } from "react";
import { callapi, setloader } from "../redux/actions/callapi";
import { useDispatch } from "react-redux";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import CustomBtn from "../Components/CustomBtn";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const youtubedata = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );
  const youtubeloader = useSelector(
    (state: ApplicationState) => state.get_youtube_loader
  );

  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    let search: string = "coding";
    let token = query.get("pagetoken");
    dispatch(setloader(true));
    dispatch(callapi({ search, token }));
  }, [dispatch]);
  const elementForScroll = useRef<HTMLDivElement>(null);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Header />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        <div
          className=" flex flex-wrap w-10/12 px-5 justify-evenly overflow-y-scroll pb-8"
          ref={elementForScroll}
        >
          {youtubeloader
            ? SkeletonVideoBox(20, "grid")
            : youtubedata[0].map((item: searchvidtype, index: number) => {
                return <GridVideoBox key={index} item={item} />;
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
                  setQuery({ pagetoken: youtubedata[1] });
                  let token = query.get("pagetoken");
                  console.log(query.get("pagetoken"), " hello next page token");
                  elementForScroll.current?.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  dispatch(setloader(true));
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
