import { Box } from "@mui/material";

import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

const Search: React.FC = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchBox />
      <SearchButton />
    </Box>
  );
};

export default Search;
