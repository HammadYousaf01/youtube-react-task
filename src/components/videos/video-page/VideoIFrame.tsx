import Box from "@mui/material/Box";
import Youtube from "react-youtube";

interface Props {
  id: string | undefined;
}

const VideoIFrame: React.FC<Props> = ({ id }) => {
  return (
    <Box>
      <Youtube videoId={id} />
    </Box>
  );
};

export default VideoIFrame;
