import { Box } from "@mui/material";
import { Video } from ".";
import { Items } from "../search/SearchResult";

interface Props {
  videos: Items[] | undefined;
}

const VideosList: React.FC<Props> = ({ videos }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: 2,
      }}
    >
      {videos?.map((video) => {
        const snippet = video.snippet;

        return (
          <Video
            key={video.id.videoId}
            id={video.id.videoId}
            title={snippet.title}
            channelId={snippet.channelId}
            channelName={snippet.channelTitle}
            channelDisplayImage={snippet.thumbnails.high}
            publishedAt={snippet.publishedAt}
          />
        );
      })}
    </Box>
  );
};

export default VideosList;
