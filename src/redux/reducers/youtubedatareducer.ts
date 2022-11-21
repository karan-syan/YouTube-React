import { searchapidata, searchvidtype } from "../../utils/types";
import {
  SEND_YOUTUBE_API_SUCCESS,
  SEND_YOUTUBE_HISTORY,
  SET_YOUTUBE_LOADER,
} from "../../utils/Constants";

export const get_youtube_data = (
  data: [searchvidtype[], string, string] = [[], "", ""],
  action: { type: string; data: [searchapidata, string | null] }
) => {
  switch (action.type) {
    case SEND_YOUTUBE_API_SUCCESS:
      if (action.data[1] !== null) {
        data = [
          action.data[0].items,
          action.data[0].nextPageToken,
          action.data[1],
        ];
      }
      console.log("in reducer", data);
      return data;
    default:
      return data;
  }
};

export const get_recent_data = (
  data: searchvidtype[] = [],
  action: { type: string; data: searchvidtype | undefined }
) => {
  switch (action.type) {
    case SEND_YOUTUBE_HISTORY:
      if (action.data !== undefined) {
        if (
          data.find((o) => o.id.videoId === action.data?.id.videoId) ===
          undefined
        ) {
          data.push(action.data);
        }
      }
      console.log("hell ", data);
      return data;
    default:
      return data;
  }
};
export const get_youtube_loader = (
  data: boolean = true,
  action: { type: string; data: boolean }
) => {
  switch (action.type) {
    case SET_YOUTUBE_LOADER:
      data = action.data;
      console.log("in reducer", data);
      return data;
    default:
      return data;
  }
};
