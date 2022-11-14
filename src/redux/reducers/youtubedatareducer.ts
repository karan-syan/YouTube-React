import { searchvidtype } from "../../utils/types";
import {
  SEND_YOUTUBE_API_FAILED,
  SEND_YOUTUBE_API_REQUEST,
  SEND_YOUTUBE_API_SUCCESS,
} from "../../utils/Constants";

export const get_youtube_data = (
  data: searchvidtype[] = [],
  action: { type: string; data: searchvidtype[] }
) => {
  switch (action.type) {
    case SEND_YOUTUBE_API_SUCCESS:
      data = action.data;
      console.log(data);
      return data;
    default:
      return data;
  }
};
