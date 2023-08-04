import { Link } from "react-router-dom";
import { Box, BoxProps, styled } from "@mui/material";
import Typography, { TypographyProps } from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import YoutubeIcon from "@mui/icons-material/YouTube";
import { useAppDispatch } from "app/hooks";
import { clearQuery } from "app/slices/searchSlice";

const StyledIconButton = styled(IconButton)<IconButtonProps>(() => ({
  padding: 1,
  ":hover": {
    backgroundColor: "inherit",
  },
}));

const StyledYoutubeIcon = styled(YoutubeIcon)(({ theme }) => ({
  color: "red",

  [`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
    fontSize: 35,
  },
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    fontSize: 43,
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    fontSize: 50,
  },
}));

const StyledTitleContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
  height: 40,
}));

const StyledTitleText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 900,
  letterSpacing: -1,

  [`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
    fontSize: 16,
  },
  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    fontSize: 18,
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    fontSize: 20,
  },
}));

const NavTitle: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Link to="/" onClick={() => dispatch(clearQuery())}>
      <StyledIconButton size="large" edge="start" color="inherit">
        <StyledYoutubeIcon />
        <StyledTitleContainer>
          <StyledTitleText variant="h6">YouTube</StyledTitleText>
        </StyledTitleContainer>
      </StyledIconButton>
    </Link>
  );
};

export default NavTitle;
