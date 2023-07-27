import useAxios from "axios-hooks";
import { API_KEY } from "../../config";
import { API_BASE_URL } from "src/config";

const useSearchRelatedVideos = (id: string | undefined) => {
  {
    const [{ data, loading, error }] = useAxios<ISearchData>({
      url: `${API_BASE_URL}/search`,

      params: {
        id,
        key: API_KEY,
        part: "snippet",
        type: "video",
        maxResults: 20,
      },
    });

    return {
      data,
      loading,
      error,
    };
  }
};

export default useSearchRelatedVideos;
