import { styled, IconButton, Box, BoxProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const StyledSearchButton = styled(Box)<BoxProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === "light" ? "#A3A3A3" : "#424141"}`,
  borderLeft: "none",
  borderRadius: "0 20px 20px 0",
  width: 50,
  backgroundColor:
    theme.palette.mode === "light" ? "#f8f8f8" : "rgba(255, 255, 255, 0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
    height: 36,
  },
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    height: 38,
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    height: 40,
  },
}));

interface Props {
  query: string;
}

const SearchButton: React.FC<Props> = ({ query }) => {
  return (
    <StyledSearchButton>
      <Link to={`/search/${query}`}>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Link>
    </StyledSearchButton>
  );
};

export default SearchButton;
