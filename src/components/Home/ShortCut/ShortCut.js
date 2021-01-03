import { Box } from "../../../styles";
import StyledLink from "./StyledLink";

const ShortCut = () => {
  return (
    <Box width="100%" height="25%" color="gold">
      <StyledLink text="사업소개" />
      <StyledLink text="보호작업장" />
      <StyledLink text="사회적응프로그램" />
      <StyledLink text="후원안내" />
    </Box>
  );
};

export default ShortCut;
