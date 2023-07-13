import { IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton: React.FC = () => {
  return (
    <Box
      sx={{
        border: "1px solid #A3A3A3",
        borderLeft: "none",
        height: 40,
        width: 50,
        borderRadius: "0 20px 20px 0",
        bgcolor: "#F0F0F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchButton;
