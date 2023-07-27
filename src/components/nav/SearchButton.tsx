import { styled, IconButton, Box, BoxProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const StyledSearchButton = styled(Box)<BoxProps>(({ theme }) => ({
  border: "1px solid #A3A3A3",
  borderLeft: "none",
  borderRadius: "0 20px 20px 0",
  width: 50,
  backgroundColor: "#F0F0F0",
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
