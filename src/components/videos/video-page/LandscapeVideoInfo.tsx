import { Typography, Box } from "@mui/material";

import Description from "./Description";
import ChannelInfo from "./ChannelInfo";
import LikeCount from "./LikeCount";

import { useSearchVideoDetails } from "api/search-hooks";
import Loading from "components/Loading";

interface Props {
  id: string | undefined;
}

const LandscapeVideoInfo: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = useSearchVideoDetails(id);

  if (loading) return <Loading />;
  if (error) return <>{error.message}</>;

  const item = data?.items[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: 900, fontSize: "20px" }}>
        {item?.snippet.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ChannelInfo id={item?.snippet.channelId} />
        <LikeCount likeCount={item?.statistics.likeCount} />
      </Box>
      <Description
        description={item?.snippet.description}
        viewCount={item?.statistics.viewCount}
        postedAt={item?.snippet.publishedAt}
      />
    </Box>
  );
};

export default LandscapeVideoInfo;
