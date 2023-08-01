import { useSearchVideosQuery } from "api/apiSlice";
import { VideosList } from ".";

import Loading from "components/Loading";

const SuggestionsPage: React.FC = () => {
  const {
    data: videos,
    isFetching,
    isError,
    error,
  } = useSearchVideosQuery("Computer Science");

  if (isFetching) return <Loading />;
  if (isError) return <div>{error.toString()}</div>;

  return <VideosList videos={videos?.items} />;
};

export default SuggestionsPage;
