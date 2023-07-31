interface IChannel {
  items: ChannelItem[];
}

interface ChannelItem {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: Thumbnails;
  };
  statistics: ChannelStatistics;
}

interface ChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  videoCount: string;
}
