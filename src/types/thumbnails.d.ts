interface Thumbnails {
  default: ThumbnailItem;
  high: ThumbnailItem;
  medium: ThumbnailItem;
}

interface ThumbnailItem {
  url: string;
  height: number;
  width: number;
}
