import { useParams } from "react-router-dom";
import { Box, BoxProps, styled } from "@mui/material";

import { VideosList } from "components/videos";
import Comments from "components/comments";
import LandscapeVideoInfo from "./LandscapeVideoInfo";
import VideoIFrame from "./VideoIFrame";

import Loading from "components/Loading";
import { useSearchRelatedVideosQuery } from "api/apiSlice";

const StyledVideoPage = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  [`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
    flexDirection: "column",
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    flexDirection: "row",
  },
}));

const StyledIframeContainer = styled(Box)<BoxProps>(() => ({
  flex: 3,
  marginTop: "16px",
  display: "flex",
  justifyContent: "center",
}));

const VideoPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useSearchRelatedVideosQuery(id!);

  if (isLoading) return <Loading />;
  if (isError) return <>{error.toString()}</>;

  return (
    <StyledVideoPage>
      <StyledIframeContainer>
        <Box className="video-page-body">
          <VideoIFrame id={id} />
          <LandscapeVideoInfo id={id} />
          <Comments videoId={id} />
        </Box>
      </StyledIframeContainer>
      <Box sx={{ flex: 1 }}>
        <VideosList videos={data?.items} />
      </Box>
    </StyledVideoPage>
  );
};

export default VideoPage;
