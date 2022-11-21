import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import WatchPlayLeft from "../Components/WatchPlayLeft";
import RecommendedVideosList from "../Components/RecommendedVideosList";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../redux/roots/rootreducer";
import { sendHistory } from "../redux/actions/callapi";

export default function WatchPlay() {
  const youtubedata = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );
  const { id } = useParams();
  var vidInfo = youtubedata[0].find((o) => o.id.videoId === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendHistory(vidInfo));
  }, [vidInfo]);

  return (
    <div className="max-h-screen overflow-hidden ">
      <div style={{ height: "7.5vh" }}>
        <Header />
      </div>
      {vidInfo !== undefined ? (
        <div className="flex overflow-y-scroll" style={{ height: "92.5vh" }}>
          <WatchPlayLeft item={vidInfo} />
          <RecommendedVideosList item={vidInfo.snippet.title} />
        </div>
      ) : null}
    </div>
  );
}
