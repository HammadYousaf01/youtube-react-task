interface IVideoStatistics {
  items: VideoStatistics[];
}

interface VideoStatistics {
  statistics: Statistics;
}

interface IVideo {
  items: VideoItem[];
}

interface VideoItem {
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    channelTitle: string;
    categoryId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
  };
  statistics: Statistics;
}

interface Statistics {
  commentCount: string;
  likeCount: string;
  viewCount: string;
}
