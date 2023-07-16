import { Box } from "@mui/material";
import userImg from '../assets/p12.jpeg'

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={ require(`../assets/${image}`)}
      />
    </Box>
  );
};

export default UserImage;