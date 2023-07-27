import { Typography } from "@mui/material";

interface Props {
  name: string;
}

const ChannelName: React.FC<Props> = ({ name }) => {
  return (
    <Typography variant="body2" sx={{ color: "#616060" }}>
      {name}
    </Typography>
  );
};

export default ChannelName;
