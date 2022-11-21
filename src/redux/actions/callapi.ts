import {
  CALL_YOUTUBE_API,
  SEND_YOUTUBE_HISTORY,
  SET_YOUTUBE_LOADER,
} from "../../utils/Constants";
import { searchvidtype } from "../../utils/types";

export const callapi = (data: {
  search: string | null | undefined;
  token: string | null;
}) => {
  console.log("in action ", data.search);
  return {
    type: CALL_YOUTUBE_API,
    data: data,
  };
};
export const setloader = (data: boolean) => {
  console.log("in action ", data);
  return {
    type: SET_YOUTUBE_LOADER,
    data: data,
  };
};

export const sendHistory = (data: searchvidtype | undefined) => {
  console.log("in action ", data);
  return {
    type: SEND_YOUTUBE_HISTORY,
    data: data,
  };
};
