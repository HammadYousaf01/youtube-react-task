import { Box } from "@mui/material";

interface Props {
  link: string;
}

const Thumbnail: React.FC<Props> = ({ link }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <img src={link} alt="" height={200} style={{ borderRadius: 5 }} />
    </Box>
  );
};

export default Thumbnail;
