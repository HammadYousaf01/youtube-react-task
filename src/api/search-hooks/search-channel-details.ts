import useAxios from "axios-hooks";
import { API_KEY } from "../../config";

const useSearchChannelDetails = (id: string) => {
  const [{ data, loading, error }] = useAxios<IChannel>({
    url: `https://www.googleapis.com/youtube/v3/channels`,

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
