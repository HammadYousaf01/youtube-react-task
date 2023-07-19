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
          ":hover": {
            bgcolor: "inherit",
          },
        }}
      >
        <YoutubeIcon
          sx={{
            fontSize: {
              md: 50,
              sm: 43,
              xs: 35,
            },
            color: "red",
          }}
        />
        <Box
          height={40}
          sx={{
            display: "flex",
            alignItems: "center",
            color: "black",
            fontWeight: 600,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                md: 20,
                sm: 18,
                xs: 16,
              },
              fontWeight: 900,
              letterSpacing: -1,
            }}
          >
            YouTube
          </Typography>
        </Box>
      </IconButton>
    </Link>
  );
};

export default NavTitle;
