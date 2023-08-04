import { Box, CircularProgress, Typography } from "@mui/material";

import Comment from "./Comment";
import { useSearchVideoCommentsQuery } from "api/apiSlice";

interface Props {
  videoId: string | undefined;
}

const Comments: React.FC<Props> = ({ videoId }) => {
  const { data, isLoading, isError, error } = useSearchVideoCommentsQuery(
    videoId!
  );

  if (isLoading) return <CircularProgress />;
  if (isError) return <>{error.toString()}</>;

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
