import useAxios from "axios-hooks";
import { IVideo } from "../../components/videos/video/Video";
import { API_KEY } from "../../config";

const useSearchVideoDetails = (id: string) => {
  const [{ data, loading, error }] = useAxios<IVideo>({
    url: `https://www.googleapis.com/youtube/v3/videos`,

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

export default useSearchVideoDetails;
