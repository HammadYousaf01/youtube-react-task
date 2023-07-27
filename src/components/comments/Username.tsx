import { Box, Typography } from "@mui/material";

interface Props {
  username: string;
}

const Username: React.FC<Props> = ({ username }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        @{username}
      </Typography>
    </Box>
  );
};

export default Username;
