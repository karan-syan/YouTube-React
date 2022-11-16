import { CALL_YOUTUBE_API } from "../../utils/Constants";

export const callapi = (data: { search: string; token: string }) => {
  console.log("in action ", data.search);
  return {
    type: CALL_YOUTUBE_API,
    data: data,
  };
};
