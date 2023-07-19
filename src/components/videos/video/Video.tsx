import { Box, Card, Grid } from "@mui/material";
import {
  Title,
  Thumbnail,
  ChannelName,
  ChannelDisplayImage,
  VideoInfo,
} from ".";
import moment from "moment";

import {
  useSearchVideoDetails,
  useSearchChannelDetails,
} from "../../../api/search-hooks";

interface Props {
  id: string;
  title: string;
  channelName: string;
  channelId: string;
  channelDisplayImage: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt: string;
}

const Video: React.FC<Props> = ({
  id,
  title,
  channelName,
  channelId,
  channelDisplayImage,
  publishedAt,
}) => {
  const { data: videoData, loading: videoLoading } = useSearchVideoDetails(id);
  const { data: channelData, loading: channelLoading } =
    useSearchChannelDetails(channelId);

  if (videoLoading || channelLoading) return <div>...loading</div>;

  return (
    <Grid item>
      <Card elevation={0} sx={{ width: 400, height: 300, m: 1 }}>
        <Thumbnail imageData={channelDisplayImage} />
        <Box sx={{ display: "flex", ml: 1 }}>
          <ChannelDisplayImage
            link={channelData?.items[0].snippet.thumbnails.default.url}
          />
          <Box>
            <Title title={title} />
            <ChannelName name={channelName} />
            <VideoInfo
              views={videoData!.items[0].statistics.viewCount}
              publishedAt={moment(publishedAt).fromNow()}
            />
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default Video;
