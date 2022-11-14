import { combineReducers } from "@reduxjs/toolkit";
import { type } from "os";
import { get_youtube_data } from ".././reducers/youtubedatareducer";

const rootreducer = combineReducers({
  get_youtube_data,
});
export default rootreducer;
export type ApplicationState = ReturnType<typeof rootreducer>;
