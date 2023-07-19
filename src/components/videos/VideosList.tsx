import Grid from "@mui/material/Grid";
import { Video } from ".";

interface Props {
  videos: Items[] | undefined;
}

const VideosList: React.FC<Props> = ({ videos }) => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        flexGrow: 1,
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
    </Grid>
  );
};

export default VideosList;
