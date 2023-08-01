import Typography from "@mui/material/Typography";
import { formatDistance } from "date-fns";

interface Props {
  postedAt: string;
  editedAt: string;
}

const PostedAt: React.FC<Props> = ({ postedAt, editedAt }) => {
  return (
    <Typography variant="caption" sx={{ ml: 1, color: "videoInfo" }}>
      {formatDistance(new Date(postedAt), new Date(), { addSuffix: true })}
      {isCommentEdited(postedAt, editedAt) && ` (edited)`}
    </Typography>
  );
};

const isCommentEdited = (postedAt: string, editedAt: string) => {
  return postedAt !== editedAt;
};

export default PostedAt;
