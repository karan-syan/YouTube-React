import { CALL_YOUTUBE_API, SET_YOUTUBE_LOADER } from "../../utils/Constants";

export const callapi = (data: { search: string; token: string }) => {
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
