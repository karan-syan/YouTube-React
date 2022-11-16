import { searchapidata, searchvidtype } from "../../utils/types";
import {
  SEND_YOUTUBE_API_FAILED,
  SEND_YOUTUBE_API_REQUEST,
  SEND_YOUTUBE_API_SUCCESS,
} from "../../utils/Constants";

export const get_youtube_data = (
  data: [searchvidtype[], string, string] = [[], "", ""],
  action: { type: string; data: [searchapidata, string] }
) => {
  switch (action.type) {
    case SEND_YOUTUBE_API_SUCCESS:
      data = [
        action.data[0].items,
        action.data[0].nextPageToken,
        action.data[1],
      ];
      console.log("in reducer", data);
      return data;
    default:
      return data;
  }
};
