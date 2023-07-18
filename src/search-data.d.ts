interface ISearchData {
  items: Items[];
}

interface Items {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    title: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
        height: number;
        width: number;
      };
      high: {
        url: string;
        height: number;
        width: number;
      };
      medium: {
        url: string;
        height: number;
        width: number;
      };
    };
  };
}
