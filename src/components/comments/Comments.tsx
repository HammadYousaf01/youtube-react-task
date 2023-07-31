import { Box, CircularProgress, Typography } from "@mui/material";

import Comment from "./Comment";
import { useSearchVideoComments } from "api/search-hooks";

interface Props {
  videoId: string | undefined;
}

const Comments: React.FC<Props> = ({ videoId }) => {
  const { data, loading, error } = useSearchVideoComments(videoId);

  if (loading) return <CircularProgress />;
  if (error) return <>{error.message}</>;

  return (
    <Box mt={2}>
      <Typography>{data?.pageInfo.totalResults} Comments</Typography>
      {data?.items.map((comment) => (
        <Comment commentThread={comment} key={comment.id} />
      ))}
    </Box>
  );
};

export default Comments;
