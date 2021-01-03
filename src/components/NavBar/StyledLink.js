import { Box } from "../../styles";
import { Link } from "react-router-dom";

const StyledLink = ({ text }) => {
  return (
    <Box width="7%" height="100%" color="ghostwhite" margin="0 1rem">
      <Link>{text}</Link>
    </Box>
  );
};

export default StyledLink;
