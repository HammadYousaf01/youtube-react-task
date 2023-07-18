interface IVideo {
  items: VideoItem[];
}

interface VideoItem {
  statistics: {
    commentCount: string;
    likeCount: string;
    viewCount: string;
  };
}
