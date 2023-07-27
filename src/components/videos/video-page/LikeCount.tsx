import { styled, Typography, Box, BoxProps } from "@mui/material";
import ThumbUp from "@mui/icons-material/ThumbUpAltRounded";

import { prettyPrintNumbers } from "components/videos/utils";

interface Props {
  likeCount: string | undefined;
  varient?: "comment" | "video";
}

const StyledLikes = styled(Box)<BoxProps>(() => ({
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  marginLeft: "16px",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
  borderRadius: "20px",
  height: "35px",
}));

const LikeCount: React.FC<Props> = ({ likeCount, varient = "video" }) => {
  return (
    <StyledLikes>
      <ThumbUp sx={{ fontSize: varient === "video" ? 24 : 16 }} />
      <Typography sx={{ ml: 1, fontSize: varient === "video" ? 16 : 12 }}>
        {prettyPrintNumbers(likeCount!)}
      </Typography>
    </StyledLikes>
  );
};

export default LikeCount;
