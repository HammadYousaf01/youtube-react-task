import { useSearchVideos } from "api/search-hooks";
import { VideosList } from ".";

import Loading from "components/Loading";

const SuggestionsPage: React.FC = () => {
  const { data, loading, error } = useSearchVideos("Computer Science");

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return <VideosList videos={data?.items} />;
};

export default SuggestionsPage;
