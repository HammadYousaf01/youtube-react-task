import React, { useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <StyledSearch>
      <SearchBox query={searchQuery} handleOnChange={handleOnChange} />
      <SearchButton query={searchQuery} />
    </StyledSearch>
  );
};

export default Search;
