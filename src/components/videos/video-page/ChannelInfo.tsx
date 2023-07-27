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
        />
      </Box>
      <Box sx={{ ml: 1 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
          {channelItem?.snippet.title}
        </Typography>
        <Typography sx={{ color: "#616060", fontSize: 12 }}>
          {prettyPrintNumbers(channelItem?.statistics.subscriberCount!)}{" "}
          subscribers
        </Typography>
      </Box>
    </Box>
  );
};

export default ChannelInfo;
