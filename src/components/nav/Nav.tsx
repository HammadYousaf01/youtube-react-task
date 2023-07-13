import { AppBar, Toolbar } from "@mui/material";

import NavTitle from "./NavTitle";
import Search from "./Search";

const Nav: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{ bgcolor: "white", display: "flex" }}
    >
      <Toolbar>
        <NavTitle />
        <Search />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
