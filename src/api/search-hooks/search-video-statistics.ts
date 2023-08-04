import useAxios from "axios-hooks";
import { API_KEY } from "../../config";
import { API_BASE_URL } from "src/config";

const useSearchVideoStatistics = (id: string | undefined) => {
  const [{ data, loading, error }] = useAxios<IVideoStatistics>({
    url: `${API_BASE_URL}/videos`,

    params: {
      part: "statistics",
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

export default useSearchVideoStatistics;
