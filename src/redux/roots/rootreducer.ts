import { combineReducers } from "@reduxjs/toolkit";
import { type } from "os";
import {
  get_youtube_data,
  get_youtube_loader,
  get_recent_data,
} from ".././reducers/youtubedatareducer";

const rootreducer = combineReducers({
  get_youtube_data,
  get_recent_data,
  get_youtube_loader,
});
export default rootreducer;
export type ApplicationState = ReturnType<typeof rootreducer>;
