// Styled Components
import { Wrapper } from "../common/Wrapper";
import { Description, Logo, LogoContainer, LogoLink } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <LogoLink to="/">
          <Logo>Bitcoin Glance</Logo>
          <Description>Quickly glance at the Bitcoin market</Description>
        </LogoLink>
      </LogoContainer>
    </Wrapper>
  );
};

export default Header;
