import useAxios from "axios-hooks";
import { API_KEY } from "../../config";
import { API_BASE_URL } from ".";

const useSearchChannelDetails = (id: string) => {
  const [{ data, loading, error }] = useAxios<IChannel>({
    url: `${API_BASE_URL}/channels`,

    params: {
      part: "snippet",
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

export default useSearchChannelDetails;
