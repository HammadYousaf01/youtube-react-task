import VideoSuggestions from ".";

interface Props {
  id?: string;
}

const Video: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h1>Video {id}</h1>
      <VideoSuggestions />
    </div>
  );
};

export default Video;
