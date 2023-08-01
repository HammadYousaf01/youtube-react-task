import { Box, Card, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";

import {
  Title,
  Thumbnail,
  ChannelName,
  ChannelDisplayImage,
  VideoInfo,
} from ".";

import {
  useSearchChannelDetailsQuery,
  useSearchVideoStatisticsQuery,
} from "api/apiSlice";

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
  const {
    data: videoData,
    isLoading: isVideoLoading,
    isError: isVideoError,
    error: videoError,
  } = useSearchVideoStatisticsQuery(id);
  const {
    data: channelData,
    isLoading: isChannelLoading,
    isError: isChannelError,
    error: channelError,
  } = useSearchChannelDetailsQuery(channelId!);

  if (isVideoLoading || isChannelLoading) return <CircularProgress />;
  if (isVideoError) return <div>{videoError.toString()}</div>;
  if (isChannelError) return <div>{channelError.toString()}</div>;

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
            publishedAt={formatDistance(new Date(publishedAt), new Date(), {
              addSuffix: true,
            })}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default Video;
