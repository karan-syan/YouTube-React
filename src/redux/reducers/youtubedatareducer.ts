import { SEND_YOUTUBE_API_DATA_TO_REDUCER } from "../../utils/Constants";

export const get_youtube_data = (
  data: {}[] = [],
  action: { type: string; data: {}[] }
) => {
  switch (action.type) {
    case SEND_YOUTUBE_API_DATA_TO_REDUCER:
      data = action.data;
      console.log(data);
      return data;
    default:
      return data;
  }
};
