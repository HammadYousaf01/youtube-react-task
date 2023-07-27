interface Props {
  url: string;
}

const UserDisplayImage: React.FC<Props> = ({ url }) => {
  return (
    <img
      src={url}
      alt="User Image"
      loading="lazy"
      style={{ borderRadius: "50%", height: 35 }}
    />
  );
};

export default UserDisplayImage;
