import { Box } from "@mui/material";

interface Props {
  link: string | undefined;
}

const ChannelDisplayImage: React.FC<Props> = ({ link }) => {
  return (
    <Box sx={{ p: 1, mt: 1 }}>
      <img src={link} style={{ width: 35, borderRadius: "50%" }} />
    </Box>
  );
};

export default ChannelDisplayImage;
