import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSearchVideos } from "../../api/search-hooks";

import { VideosList } from "..";

const SearchResult: React.FC = () => {
  const { query } = useParams();
  const { data, loading, error } = useSearchVideos(query);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Box>
      <VideosList videos={data?.items} />
    </Box>
  );
};

export default SearchResult;
