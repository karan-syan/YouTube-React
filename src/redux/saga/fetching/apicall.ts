import axios from "axios";

enum urlparam {
  maxResults = 48,
  part = "snippet",
  type = "video",
}

export const fetchData = async (val: string) => {
  let data = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/search?q=${val}&part=${urlparam.part}&type=${urlparam.type}&maxResults=${urlparam.maxResults}&key=${process.env.REACT_APP_API_KEY}`
  );
  console.log("after just fetch", data.data);
  return data.data.items;
};
