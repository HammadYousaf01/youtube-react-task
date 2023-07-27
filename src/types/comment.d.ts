interface IComment {
  pageInfo: {
    totalResults: string;
  };
  items: CommentThread[];
}

interface CommentThread {
  id: string;
  snippet: {
    videoId: string;
    topLevelComment: CommentItem;
  };
}

interface CommentItem {
  id: string;
  snippet: {
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: {
      value: string;
    };
    likeCount: string;
    publishedAt: string;
    updatedAt: string;
  };
}
