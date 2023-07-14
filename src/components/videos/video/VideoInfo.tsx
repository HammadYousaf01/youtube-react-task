import { Typography } from "@mui/material";

interface Props {
  info: string;
}

const VideoInfo: React.FC<Props> = ({ info }) => {
  return (
    <Typography sx={{ color: "#616060", fontSize: 14 }}>{info}</Typography>
  );
};

export default VideoInfo;
