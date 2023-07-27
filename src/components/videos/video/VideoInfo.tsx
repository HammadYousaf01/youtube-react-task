import { Typography } from "@mui/material";
import { prettyPrintNumbers } from "components/videos//utils";

interface Props {
  views: string;
  publishedAt: string;
}

const VideoInfo: React.FC<Props> = ({ views, publishedAt }) => {
  return (
    <Typography sx={{ color: "#616060", fontSize: 14 }}>
      {prettyPrintNumbers(views)} views . {publishedAt}
    </Typography>
  );
};

export default VideoInfo;
