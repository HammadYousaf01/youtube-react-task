import useAxios from "axios-hooks";
import { SearchData } from "./SearchResult";
import { IVideo, IChannel } from "../videos/video/Video";

const useSearchVideos = (
  query: string | undefined,
  key: string,
  maxResults = 20
) => {
  const [{ data, loading, error }] = useAxios<SearchData>({
    url: `https://youtube.googleapis.com/youtube/v3/search`,

    params: {
      part: "snippet",
      type: "video",
      maxResults,
      q: query,
      key,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

const useSearchVideoDetails = (id: string, key: string) => {
  const [{ data, loading, error }] = useAxios<IVideo>({
    url: `https://www.googleapis.com/youtube/v3/videos`,

    params: {
      part: "statistics",
      id,
      key,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

const useSearchChannelDetails = (id: string, key: string) => {
  const [{ data, loading, error }] = useAxios<IChannel>({
    url: `https://www.googleapis.com/youtube/v3/channels`,

    params: {
      part: "snippet",
      id,
      key,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export { useSearchVideos, useSearchVideoDetails, useSearchChannelDetails };
