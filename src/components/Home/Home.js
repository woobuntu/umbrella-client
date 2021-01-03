import Carousel from "./Carousel";
import ShortCut from "./ShortCut/ShortCut";
import Bottom from "./Bottom/Bottom";
import { Box } from "../../styles";

const Home = () => {
  return (
    <Box width="100%" height="78%" flexDirection="column">
      <Carousel />
      <ShortCut />
      <Bottom />
    </Box>
  );
};

export default Home;
