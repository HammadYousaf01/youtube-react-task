import { Box, Card } from "@mui/material";
import {
  Title,
  Thumbnail,
  ChannelName,
  ChannelDisplayImage,
  VideoInfo,
} from ".";
import moment from "moment";

import {
  useSearchChannelDetails,
  useSearchVideoDetails,
} from "../../search/utils";

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

export interface IVideo {
  items: VideoItem[];
}

export interface VideoItem {
  statistics: {
    commentCount: string;
    likeCount: string;
    viewCount: string;
  };
}

export interface IChannel {
  items: ChannelItem[];
}

export interface ChannelItem {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: string;
        height: string;
      };
      medium: {
        url: string;
        width: string;
        height: string;
      };
      high: {
        url: string;
        width: string;
        height: string;
      };
    };
  };
}

const API_KEY = "AIzaSyBeqMJPBIJRZa2ggng3LKnzNzaIkXCleag";

const Video: React.FC<Props> = ({
  id,
  title,
  channelName,
  channelId,
  channelDisplayImage,
  publishedAt,
}) => {
  const { data, loading } = useSearchVideoDetails(id, API_KEY);
  const { data: channelData, loading: channelLoading } =
    useSearchChannelDetails(channelId, API_KEY);

  if (loading || channelLoading) return <div>...loading</div>;

  return (
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
            info={`${data!.items[0].statistics.viewCount} views . ${moment(
              publishedAt
            ).fromNow()}`}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default Video;
