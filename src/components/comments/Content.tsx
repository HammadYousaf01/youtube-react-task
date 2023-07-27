import Typography from "@mui/material/Typography";

interface Props {
  content: string;
}

const Content: React.FC<Props> = ({ content }) => {
  return <Typography variant="body2">{content}</Typography>;
};

export default Content;
