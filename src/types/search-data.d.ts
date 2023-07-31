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
    thumbnails: Thumbnails;
  };
}
