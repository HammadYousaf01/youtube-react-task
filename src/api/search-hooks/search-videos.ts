import useAxios from "axios-hooks";
import { API_KEY } from "../../config";
import { SearchData } from "../../components/search/SearchResult";

const useSearchVideos = (query: string | undefined, maxResults = 20) => {
  const [{ data, loading, error }] = useAxios<SearchData>({
    url: `https://youtube.googleapis.com/youtube/v3/search`,

    params: {
      part: "snippet",
      type: "video",
      maxResults,
      q: query,
      key: API_KEY,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useSearchVideos;
