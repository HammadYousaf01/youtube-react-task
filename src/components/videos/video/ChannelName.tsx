import { Typography } from "@mui/material";

interface Props {
  name: string;
}

const ChannelName: React.FC<Props> = ({ name }) => {
  return (
    <Typography sx={{ fontSize: 14, color: "#616060" }}>{name}</Typography>
  );
};

export default ChannelName;
