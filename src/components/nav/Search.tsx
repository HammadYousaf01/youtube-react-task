import React, { useState } from "react";
import { Box } from "@mui/material";

import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchBox query={searchQuery} handleOnChange={handleOnChange} />
      <SearchButton query={searchQuery} />
    </Box>
  );
};

export default Search;
