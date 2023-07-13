import { TextField } from "@mui/material";

const SearchBox: React.FC = () => {
  return (
    <TextField
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
