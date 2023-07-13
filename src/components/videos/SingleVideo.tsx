import Video from "./Video";
import { useParams } from "react-router-dom";

const SingleVideo: React.FC = () => {
  const { id } = useParams();
  return <Video id={id} />;
};

export default SingleVideo;
