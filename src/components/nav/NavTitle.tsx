import { Link } from "react-router-dom";
import { IconButton, Typography, Box } from "@mui/material";
import YoutubeIcon from "@mui/icons-material/YouTube";

const NavTitle: React.FC = () => {
  return (
    <Link to="/">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{
          p: 1,
          color: "red",
          ":hover": {
            bgcolor: "inherit",
          },
        }}
      >
        <YoutubeIcon style={{ fontSize: 50 }} />
        <Box height={40} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">YouTube</Typography>
        </Box>
      </IconButton>
    </Link>
  );
};

export default NavTitle;
