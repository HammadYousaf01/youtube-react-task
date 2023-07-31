import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Box sx={{ mt: 1, mr: 3 }}>
      <Typography sx={{ fontWeight: 600, fontSize: 16 }} title={title}>
        {title.length <= 60 ? title : title.slice(0, 60) + "..."}
      </Typography>
    </Box>
  );
};

export default Title;
