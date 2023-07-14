import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { VideoIFrame, VideosList } from ".";

const SingleVideo: React.FC = () => {
  const { id } = useParams();

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flex: 3 }}>
        <VideoIFrame />
      </Box>
      <Box sx={{ flex: 1 }}>
        <VideosList />
      </Box>
    </Box>
  );
};

export default SingleVideo;
