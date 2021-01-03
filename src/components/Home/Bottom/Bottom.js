import { Box } from "../../../styles";
import Notice from "./Notice";
import Introduce from "./Introduce";
import Support from "./Support";

const Bottom = () => {
  return (
    <Box height="25%">
      <Notice />
      <Introduce />
      <Support />
    </Box>
  );
};

export default Bottom;
