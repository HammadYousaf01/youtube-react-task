import useAxios from "axios-hooks";
import { API_KEY } from "../../config";
import { API_BASE_URL } from "src/config";

const useSearchVideoComments = (videoId: string | undefined) => {
  const [{ data, loading, error }] = useAxios<IComment>({
    url: `${API_BASE_URL}/commentThreads`,

    params: {
      part: "snippet",
      videoId,
      key: API_KEY,
      maxResults: 100,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useSearchVideoComments;
