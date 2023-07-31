import Box from "@mui/material/Box";
import LikeCount from "components/videos/video-page/LikeCount";

import UserDisplayImage from "./UserDisplayImage";
import Username from "./Username";
import PostedAt from "./PostedAt";
import Content from "./Content";

interface Props {
  commentThread: CommentThread;
}

const Comment: React.FC<Props> = ({ commentThread }) => {
  const comment = commentThread.snippet.topLevelComment.snippet;

  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      <UserDisplayImage url={comment.authorProfileImageUrl} />
      <Box>
        <Box sx={{ ml: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Username username={comment.authorDisplayName} />
            <PostedAt
              postedAt={comment.publishedAt}
              editedAt={comment.updatedAt}
            />
          </Box>
          <Content content={comment.textOriginal} />
        </Box>
        <Box sx={{ width: 75, mt: 1 }}>
          <LikeCount likeCount={comment.likeCount} variant="comment" />
        </Box>
      </Box>
    </Box>
  );
};

export default Comment;
