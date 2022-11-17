import { useDispatch, useSelector } from "react-redux";
import { callapi } from "../redux/actions/callapi";
import { useEffect } from "react";
import { ApplicationState } from "../redux/roots/rootreducer";
import { searchvidtype } from "../utils/types";
import VidList from "./ListVideoBox";

interface iprops {
  item: string;
}
export default function WatchPlayRight({ item }: iprops) {
  const youtubeRecommended = useSelector(
    (state: ApplicationState) => state.get_youtube_data
  );

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(item);
    let search: string = item;
    let token: string = "";
    dispatch(callapi({ search, token }));
  }, [item]);

  return (
    <div className="mt-4 w-1/3">
      {youtubeRecommended[0].map((val: searchvidtype, index: number) => {
        return (
          <VidList item={val} key={index} ch={30} ch_img={false} desc={false} />
        );
      })}
    </div>
  );
}
