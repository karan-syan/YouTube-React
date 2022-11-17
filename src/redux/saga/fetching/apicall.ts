import axios from "axios";
import { YOUTUBE_URL } from "../../../utils/Constants";

enum urlparam {
  maxResults = 48,
  part = "snippet",
  type = "video",
}

export const fetchData = async (val: { search: string; token: string }) => {
  if (val.token === "") {
    let data = await axios.get(
      `${YOUTUBE_URL}q=${val.search}&part=${urlparam.part}&type=${urlparam.type}&maxResults=${urlparam.maxResults}&key=${process.env.REACT_APP_API_KEY}`
    );
    console.log("after just fetch", data.data);
    return data.data;
  } else {
    let data = await axios.get(
      `${YOUTUBE_URL}q=${val.search}&pageToken=${val.token}&part=${urlparam.part}&type=${urlparam.type}&maxResults=${urlparam.maxResults}&key=${process.env.REACT_APP_API_KEY}`
    );
    console.log("after just fetch", data.data);
    return data.data;
  }
};
