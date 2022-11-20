import { searchapidata, searchvidtype } from "../../utils/types";
import {
  SEND_YOUTUBE_API_SUCCESS,
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
