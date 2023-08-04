import { styled, Box, BoxProps, Typography } from "@mui/material";

import { prettyPrintNumbers } from "components/videos/utils";

import Loading from "components/Loading";
import { useSearchChannelDetailsQuery } from "src/api/apiSlice";

interface Props {
  id: string | undefined;
}

const StyledChannelInfo = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: 8,
}));

const ChannelInfo: React.FC<Props> = ({ id }) => {
  const { data, isLoading, isError, error } = useSearchChannelDetailsQuery(id!);

  if (isLoading) return <Loading />;
  if (isError) return <div>{error.toString()}</div>;
  const channelItem = data?.items[0];

  return (
    <StyledChannelInfo>
      <Box>
        <img
          src={channelItem?.snippet.thumbnails.default.url}
          style={{ width: 35, borderRadius: "50%" }}
          referrerPolicy="no-referrer"
        />
      </Box>
      <Box sx={{ ml: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {channelItem?.snippet.title}
        </Typography>
        <Typography variant="caption" sx={{ color: "videoInfo" }}>
          {prettyPrintNumbers(channelItem?.statistics.subscriberCount!)}{" "}
          subscribers
        </Typography>
      </Box>
    </StyledChannelInfo>
  );
};

export default ChannelInfo;
