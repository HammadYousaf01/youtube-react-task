import { Box, Card } from "@mui/material";
import {
  Title,
  Thumbnail,
  ChannelName,
  ChannelDisplayImage,
  VideoInfo,
} from ".";

const Video: React.FC = () => {
  const imageLink =
    "https://img.freepik.com/premium-psd/business-youtube-thumbnail-design-template_475351-263.jpg?size=626&ext=jpg&ga=GA1.2.1507321290.1689256987&semt=ais";

  return (
    <Card elevation={0} sx={{ width: 400, height: 300 }}>
      <Thumbnail link={imageLink} />
      <Box sx={{ display: "flex", ml: 1 }}>
        <ChannelDisplayImage link={""} />
        <Box>
          <Title title="Video title here" />
          <ChannelName name="Channel Name here" />
          <VideoInfo info="16k views . 2 weeks ago" />
        </Box>
      </Box>
    </Card>
  );
};

export default Video;
