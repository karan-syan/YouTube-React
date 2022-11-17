import { searchvidtype } from "./types";

export const Api_Distructing = (item: searchvidtype) => {
  const {
    channelId,
    channelTitle,
    description,
    liveBroadcastContent,
    publishTime,
    publishedAt,
    title,
  } = item.snippet;
  const { videoId } = item.id;
  const ThumbnailMedium = item.snippet.thumbnails.medium.url;
  return {
    channelId,
    channelTitle,
    description,
    liveBroadcastContent,
    publishTime,
    publishedAt,
    title,
    videoId,
    ThumbnailMedium,
  };
};
