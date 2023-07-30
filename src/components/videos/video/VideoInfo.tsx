import { Typography } from "@mui/material";
import { prettyPrintNumbers } from "components/videos//utils";

interface Props {
  views: string;
  publishedAt: string;
}

const VideoInfo: React.FC<Props> = ({ views, publishedAt }) => {
  return (
    <Typography variant="body2" sx={{ color: "videoInfo" }}>
      {prettyPrintNumbers(views)} views . {publishedAt}
    </Typography>
  );
};

export default VideoInfo;
