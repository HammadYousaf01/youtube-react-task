interface IChannel {
  items: ChannelItem[];
}

interface ChannelItem {
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
