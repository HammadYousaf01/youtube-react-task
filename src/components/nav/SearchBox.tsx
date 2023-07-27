import { styled } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";

interface Props {
  query: string;
  handleOnChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const SearchBoxField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "20px 0 0 20px",
    borderRight: "none",
    paddingLeft: 5,
    fontSize: "inherit",
  },

  [`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
    width: 180,
    fontSize: 13,
  },
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    width: 300,
    fontSize: 14.5,
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    width: 400,
    fontSize: 16,
  },
}));

const SearchBox: React.FC<Props> = ({ query, handleOnChange }) => {
  return (
    <SearchBoxField
      value={query}
      onChange={handleOnChange}
      size="small"
      placeholder="Search"
    />
  );
};

export default SearchBox;
