import { CALL_YOUTUBE_API } from "../../utils/Constants";

export const callapi = (data: string) => {
  return {
    type: CALL_YOUTUBE_API,
    data: data,
  };
};
