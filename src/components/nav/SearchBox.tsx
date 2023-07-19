import { TextField } from "@mui/material";

interface Props {
  query: string;
  handleOnChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const SearchBox: React.FC<Props> = ({ query, handleOnChange }) => {
  return (
    <TextField
      value={query}
      onChange={handleOnChange}
      size="small"
      InputProps={{
        style: {
          borderRadius: "20px 0 0 20px",
          borderRight: "none",
          paddingLeft: 5,
          fontSize: "inherit",
        },
      }}
      sx={{
        width: {
          md: 400,
          sm: 300,
          xs: 180,
        },
        fontSize: {
          md: 16,
          sm: 14.5,
          xs: 13,
        },
      }}
      placeholder="Search"
    />
  );
};

export default SearchBox;
