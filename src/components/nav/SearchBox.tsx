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
          width: 400,
          borderRight: "none",
          paddingLeft: 5,
        },
      }}
      placeholder="Search"
    />
  );
};

export default SearchBox;
