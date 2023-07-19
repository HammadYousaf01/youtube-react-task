import useAxios from "axios-hooks";
import { API_KEY } from "../../config";
import { API_BASE_URL } from ".";

const useSearchVideos = (query: string | undefined, maxResults = 20) => {
  const [{ data, loading, error }] = useAxios<ISearchData>({
    url: `${API_BASE_URL}/search`,

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
