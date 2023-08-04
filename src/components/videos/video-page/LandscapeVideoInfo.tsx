import { Typography, Box, BoxProps, styled } from "@mui/material";

import Description from "./Description";
import ChannelInfo from "./ChannelInfo";
import LikeCount from "./LikeCount";

import Loading from "components/Loading";
import { useSearchVideoDetailsQuery } from "api/apiSlice";

const StyledChannelInfo = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

interface Props {
  id: string | undefined;
}

const LandscapeVideoInfo: React.FC<Props> = ({ id }) => {
  const { data, isLoading, isError, error } = useSearchVideoDetailsQuery(id!);

  if (isLoading) return <Loading />;
  if (isError) return <>{error.toString()}</>;

  const item = data?.items[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {item?.snippet.title}
      </Typography>
      <StyledChannelInfo>
        <ChannelInfo id={item?.snippet.channelId} />
        <LikeCount likeCount={item?.statistics.likeCount} />
      </StyledChannelInfo>
      <Description
        description={item?.snippet.description}
        viewCount={item?.statistics.viewCount}
        postedAt={item?.snippet.publishedAt}
      />
    </Box>
  );
};

export default LandscapeVideoInfo;
