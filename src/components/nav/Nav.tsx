import {
  AppBar,
  AppBarProps,
  IconButton,
  Toolbar,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import NavTitle from "./NavTitle";
import Search from "./Search";
import { ToggleThemeContext } from "src/theme/ThemeProvider";

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.navBgColor,
}));

const Nav: React.FC = () => {
  const theme = useTheme();
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <StyledAppBar position="static" elevation={1}>
      <Toolbar>
        <NavTitle />
        <Search />
        <IconButton
          sx={{ color: theme.palette.text.primary }}
          size="small"
          onClick={toggleTheme}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Nav;
