import { Box } from "@mui/material";

interface Props {
  imageData: {
    url: string;
    height: number;
    width: number;
  };
}

const Thumbnail: React.FC<Props> = ({ imageData }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <img
        src={imageData.url}
        alt=""
        height={200}
        width={356}
        loading="lazy"
        style={{ borderRadius: 5, objectFit: "cover" }}
      />
    </Box>
  );
};

export default Thumbnail;
