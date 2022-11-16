import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callapi } from "../redux/actions/callapi";
import { ApplicationState } from "../redux/roots/rootreducer";

export default function NextPageBtn() {
  const youtubeNext = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );
  const dispatch = useDispatch();

  return (
    <div className="w-4/5 flex flex-col-reverse items-end">
      <button
        className="bg-red-600 text-white w-2/12 rounded-full py-2 text-lg hover:bg-red-700 active:bg-red-800"
        onClick={() => {
          let search: string = youtubeNext[2];
          let token: string = youtubeNext[1];
          dispatch(callapi({ search, token }));
        }}
      >
        Next Page
      </button>
    </div>
  );
}
