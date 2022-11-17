import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowRight } from "react-icons/ai";
import { callapi, setloader } from "../redux/actions/callapi";
import { ApplicationState } from "../redux/roots/rootreducer";

export default function NextPageBtn({
  scrollElement,
}: {
  scrollElement: React.RefObject<HTMLDivElement>;
}) {
  const youtubeNext = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );
  const dispatch = useDispatch();

  return (
    <div className="w-4/5 flex flex-col-reverse items-end">
      <button
        className="bg-red-600 flex justify-center items-center text-white w-2/12 rounded-full py-2 text-lg hover:bg-red-700 active:bg-red-800"
        onClick={() => {
          let search: string = youtubeNext[2];
          let token: string = youtubeNext[1];
          dispatch(setloader(true));
          scrollElement.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          dispatch(callapi({ search, token }));
        }}
      >
        Next Page
        <AiOutlineArrowRight className="ml-2 text-white text-xl" />
      </button>
    </div>
  );
}
