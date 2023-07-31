import { CircularProgress, styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

const StyledLoadingContainer = styled(Box)<BoxProps>(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Loading: React.FC = () => {
  return (
    <StyledLoadingContainer>
      <CircularProgress />
    </StyledLoadingContainer>
  );
};

export default Loading;
