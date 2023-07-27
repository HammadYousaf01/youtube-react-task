import { useParams } from "react-router-dom";
import { Box, BoxProps, styled } from "@mui/material";

import { VideosList } from "components/videos";
import Comments from "components/comments";
import LandscapeVideoInfo from "./LandscapeVideoInfo";
import VideoIFrame from "./VideoIFrame";

import { useSearchRelatedVideos } from "api/search-hooks";
import Loading from "components/Loading";

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
  const { data, loading, error } = useSearchRelatedVideos(id);

  if (loading) return <Loading />;
  if (error) return <>{error.message}</>;

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
