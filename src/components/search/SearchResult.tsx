import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSearchVideos } from "../../api/search-hooks";

import { VideosList } from "..";

const SearchResult: React.FC = () => {
  const { query } = useParams();
  const { data, loading, error } = useSearchVideos(query);

  if (loading)
    return (
      <Box
        sx={{
          height: "90vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (error) return <Box>{error.message}</Box>;

  return (
    <Box sx={{ mt: 1 }}>
      <VideosList videos={data?.items} />
    </Box>
  );
};

export default SearchResult;
