import { Box } from "@mui/material";
import channelLogo from "/channelLogo.jpg";

interface Props {
  link: string;
}

const ChannelDisplayImage: React.FC<Props> = () => {
  return (
    <Box sx={{ p: 1 }}>
      <img
        src={channelLogo}
        alt=""
        style={{ width: 30, borderRadius: "50%" }}
      />
    </Box>
  );
};

export default ChannelDisplayImage;
