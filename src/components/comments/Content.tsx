import Typography from "@mui/material/Typography";

interface Props {
  content: string;
}

const Content: React.FC<Props> = ({ content }) => {
  return <Typography sx={{ fontSize: 14 }}>{content}</Typography>;
};

export default Content;
