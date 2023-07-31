import { styled, Typography, Box, BoxProps } from "@mui/material";
import ThumbUp from "@mui/icons-material/ThumbUpAltRounded";

import { prettyPrintNumbers } from "components/videos/utils";

type variantType = "comment" | "video";

interface Props {
  likeCount: string | undefined;
  variant?: variantType;
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

const StyledThumbUp = styled(ThumbUp)<{ variant: variantType }>(
  ({ variant }) => ({
    fontSize: variant === "video" ? 24 : 16,
  })
);

const LikeCount: React.FC<Props> = ({ likeCount, variant = "video" }) => {
  return (
    <StyledLikes>
      <StyledThumbUp variant={variant} />
      <Typography
        sx={{ ml: 1 }}
        variant={variant === "video" ? "body1" : "caption"}
      >
        {prettyPrintNumbers(likeCount!)}
      </Typography>
    </StyledLikes>
  );
};

export default LikeCount;
