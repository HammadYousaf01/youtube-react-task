import { Box } from "@mui/material";
import { Video } from ".";

const VideosList: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Video />
      <Video />
      <Video />
      <Video />
    </Box>
  );
};

export default VideosList;
