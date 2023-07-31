import { Box, Typography } from "@mui/material";

import { useSearchChannelDetails } from "api/search-hooks";
import { prettyPrintNumbers } from "components/videos/utils";

import Loading from "components/Loading";

interface Props {
  id: string | undefined;
}

const ChannelInfo: React.FC<Props> = ({ id }) => {
  const { data, loading } = useSearchChannelDetails(id);

  if (loading) return <Loading />;
  const channelItem = data?.items[0];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 1,
      }}
    >
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
    </Box>
  );
};

export default ChannelInfo;
