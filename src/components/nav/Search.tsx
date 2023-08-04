import { styled, Box, BoxProps } from "@mui/material";

import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

const StyledSearch = styled(Box)<BoxProps>(() => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search: React.FC = () => {
  return (
    <StyledSearch>
      <SearchBox />
      <SearchButton />
    </StyledSearch>
  );
};

export default Search;
