import { Typography } from "@mui/material";

interface Props {
  views: string;
  publishedAt: string;
}

const VideoInfo: React.FC<Props> = ({ views, publishedAt }) => {
  return (
    <Typography sx={{ color: "#616060", fontSize: 14 }}>
      {preetyPrintViews(views)} views . {publishedAt}
    </Typography>
  );
};

const preetyPrintViews = (views: string) => {
  const viewsParsedToNumbers = parseInt(views);
  if (viewsParsedToNumbers < 1000) {
    return views;
  } else if (viewsParsedToNumbers < 1e6) {
    return `${views.slice(0, -3)}k`;
  } else if (viewsParsedToNumbers < 1e9) {
    return `${views.slice(0, -6)}M`;
  } else {
    return `${views.slice(0, -9)}B`;
  }
};

export default VideoInfo;
