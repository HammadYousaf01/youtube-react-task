import Typography from "@mui/material/Typography";
import moment from "moment";

interface Props {
  postedAt: string;
  editedAt: string;
}

const PostedAt: React.FC<Props> = ({ postedAt, editedAt }) => {
  return (
    <Typography sx={{ fontSize: 12, ml: 1, color: "#616060" }}>
      {moment(postedAt).fromNow()}
      {isCommentEdited(postedAt, editedAt) && ` (edited)`}
    </Typography>
  );
};

const isCommentEdited = (postedAt: string, editedAt: string) => {
  return postedAt !== editedAt;
};

export default PostedAt;
