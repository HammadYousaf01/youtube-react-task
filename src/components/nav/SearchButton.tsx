import { IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

interface Props {
  query: string;
}

const SearchButton: React.FC<Props> = ({ query }) => {
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
      <Link to={`/search/${query}`}>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Link>
    </Box>
  );
};

export default SearchButton;
