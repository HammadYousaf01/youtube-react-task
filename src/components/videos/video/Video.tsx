import { Box, Card, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";

import {
  Title,
  Thumbnail,
  ChannelName,
  ChannelDisplayImage,
  VideoInfo,
} from ".";

import {
  useSearchVideoStatistics,
  useSearchChannelDetails,
} from "api/search-hooks";

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
  const { data: videoData, loading: videoLoading } =
    useSearchVideoStatistics(id);
  const { data: channelData, loading: channelLoading } =
    useSearchChannelDetails(channelId);

  if (videoLoading || channelLoading) return <CircularProgress />;

  return (
    <Card elevation={0} sx={{ width: 400, height: 300, m: 1 }}>
      <Thumbnail imageData={channelDisplayImage} />
      <Box sx={{ display: "flex", ml: 2 }}>
        <ChannelDisplayImage
          link={channelData?.items[0].snippet.thumbnails.default.url}
        />
        <Box>
          <Link
            to={`/videos/${id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Title title={title} />
          </Link>
          <ChannelName name={channelName} />
          <VideoInfo
            views={videoData!.items[0].statistics.viewCount}
            publishedAt={moment(publishedAt).fromNow()}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default Video;
