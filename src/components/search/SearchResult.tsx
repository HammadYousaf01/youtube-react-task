import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSearchVideos } from "./utils";

import { VideosList } from "..";

const API_KEY = "AIzaSyBeqMJPBIJRZa2ggng3LKnzNzaIkXCleag";

export interface SearchData {
  items: Items[];
}

export interface Items {
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

const SearchResult: React.FC = () => {
  const { query } = useParams();
  const { data, loading, error } = useSearchVideos(query, API_KEY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Box>
      <VideosList videos={data?.items} />
    </Box>
  );
};

export default SearchResult;
