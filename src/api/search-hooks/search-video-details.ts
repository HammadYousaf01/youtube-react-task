import useAxios from "axios-hooks";
import { API_KEY } from "../../config";
import { API_BASE_URL } from "src/config";

const useSearchVideoDetails = (id: string | undefined) => {
  const [{ data, loading, error }] = useAxios<IVideo>({
    url: `${API_BASE_URL}/videos`,

    params: {
      part: "snippet, statistics",
      id,
      key: API_KEY,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useSearchVideoDetails;
