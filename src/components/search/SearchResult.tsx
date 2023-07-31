import { useParams } from "react-router-dom";
import { useSearchVideos } from "api/search-hooks";

import { VideosList } from "components/videos";
import Loading from "components/Loading";

const SearchResult: React.FC = () => {
  const { query } = useParams();
  const { data, loading, error } = useSearchVideos(query);

  if (loading) return <Loading />;
  if (error) return <>{error.message}</>;

  return <VideosList videos={data?.items} />;
};

export default SearchResult;
