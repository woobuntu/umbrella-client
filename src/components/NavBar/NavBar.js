import { Box } from "../../styles";
import Logo from "./Logo";
import StyledLink from "./StyledLink";

const NavBar = () => {
  return (
    <Box color="#e36159" height="7%" opacity="0.88">
      <Logo />
      <StyledLink text="사회복지법인" />
      <StyledLink text="사회복지시설" />
      <StyledLink text="사회적응프로그램" />
      <StyledLink text="후원안내" />
      <StyledLink text="커뮤니티" />
      <StyledLink text="구인구직" />
      <StyledLink text="쇼핑몰" />
    </Box>
  );
};

export default NavBar;
